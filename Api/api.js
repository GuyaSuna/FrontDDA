const URL = "http://localhost:5000/"

const logIn = async (name, password) => {
  try {
    const response = await fetch(`${URL}vendedor/LogIn`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        password: password,
      }),
    });

    console.log("Response status:", response.status);

    if (response.ok) {
      const responseBody = await response.json();
      console.log("Response body:", responseBody);

      if (responseBody.nroVendedor) {
        console.log("Registro exitoso");
        return true;
      } else {
        console.log("Registro fallido");
        return false;
      }
    } else {
      console.error("Error en la solicitud:", response.status);
      return false;
    }
  } catch (error) {
    console.error(`An error has occurred in ClientRegister: ${error.message}`);
    return false;
  }
};



const ClientRegister = async (name, address, phone, date) => {
  try {
    let url = `${URL}clientes/regular`;
    if (date !== "") {
      url = `${URL}clientes/vip`;
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: name,
        direccion: address,
        telefono: parseInt(phone),
        fchIngreso: date,
      }),
    });

    console.log("Response status:", response.status);

    if (response.ok) {
      const responseBody = await response.json();
      console.log("Response body:", responseBody);

      if (responseBody.idCli) {
        console.log("Registro exitoso");
        return true;
      } else {
        console.log("Registro fallido");
        return false;
      }
    } else {
      console.error("Error en la solicitud:", response.status);
      return false;
    }
  } catch (error) {
    console.error(`An error has occurred in ClientRegister: ${error.message}`);
    return false;
  }
};



const getAllProducts = async () => {
  try{
  const response = await fetch(`${URL}products`, {
    method: "GET",

  });
    if (!response.ok) {
      throw new Error(`La solicitud falló  ${response.status}`);
    }

    const data = await response.json();
    return data.data;  
  } catch (error) {
    console.error(`Error en la función: ${error.message}`);
    throw error; 
  }
};

const getProduct = codProd => {
  return new Promise((resolve, reject) => {
    fetch(`${URL}products/${codProd}`, {
      method: "GET",
    })
      .then(response => {
        if (!response.ok) {
          const errorMessage = `La solicitud falló con código: ${response.status}`;
          reject(errorMessage);
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error.message || "Error desconocido");
      });
  });
};

const deleteProdct = (codProd, setMsg, setSucces, setListaProductos) => {
  fetch(`${URL}products/${codProd}`,{
      method: `DELETE`,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => {
      if(!response.ok) {
        throw new Error(`La solicitud fallo: ${response.status}`);
      }
      return response.text();
  })
  .then(data =>{
    setMsg(data)
    setSucces(true)
    ListaProductos(setListaProductos)
    console.log(`data`,data);
  })
  .catch(error =>{
    setMsg(error)
    setSucces(false)
    console.log(`Fetch error:`,error);
  })
};

const updateProduct = async (updatedProductData) => {
  try {
    const response = await fetch(`${URL}/products`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProductData),
    });

    if (!response.ok) {
      throw new Error(`La solicitud PUT falló con código ${response.status}`);
    }

    const updatedProduct = await response.json();
    console.log('Producto actualizado:', updatedProduct);
    return updatedProduct;
  } catch (error) {
    console.error(`Error al actualizar el producto: ${error.message}`);
    throw error;
  }
};


export{
  logIn,
  getAllProducts,
  ClientRegister,
  getProduct,
  deleteProdct,
  updateProduct
} ;