const URL = "http://localhost:5000/";

const logIn = async (name, password) => {
  try {
    const response = await fetch(`${URL}vendedor/LogIn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    if (data.nroVendedor) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(`Error en la función logIn: ${error.message}`);
    return false;
  }
};
const VentaRegister = async (
  nroVenta,
  totalVenta,
  fchCompra,
  nroVendedor,
  cliente
) => {
  try {
    const response = await fetch(`${URL}Venta`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nroVenta,
        totalVenta,
        fchCompra,
        nroVendedor,
        cliente,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    if (response.authenticated) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(`An error has ocurred in Venta: ${error.message}`);
    return false;
  }
};

const ClientRegister = async (name, address, phone, date) => {
  try {
    if (date != "") {
      const response = await fetch(`${URL}Clientes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, address, phone }),
      });
    } else {
      const response = await fetch(`${URL}Clientes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, address, phone, date }),
      });
    }

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
    console.error(`An error has ocurred in ClientRegister: ${error.message}`);
    return false;
  }
};

const getAllProducts = async () => {
  try {
    const response = await fetch(`${URL}products`, {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
      },
    });
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

export { logIn, getAllProducts, ClientRegister, VentaRegister };
