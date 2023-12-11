const URL = "http://localhost:5000/"

const logIn = async (name , password) => {
        try {
          const response = await fetch(`${URL}login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, password }),
          });
      
          if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
          }

          const data = await response.json();
      
          if (data.authenticated) {
            return true;
          } else {
            return false;
          }
        } catch (error) {
          console.error(`Error en la función logIn: ${error.message}`);
          return false;
        }
};
const getAllProducts = async () => {
  const apiUrl = `${URL}products`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`La solicitud falló con código ${response.status}`);
    }

    const data = await response.json();
    return data.data;  
  } catch (error) {
    console.error(`Error en la función: ${error.message}`);
    throw error; 
  }
};
  
export{
  logIn,
  getAllProducts
} ;