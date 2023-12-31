const URL = "http://localhost:5000/";

const logIn = async (name, password) => {
  try {
    const response = await fetch(`${URL}vendedor/LogIn`, {
      method: `POST`,
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
      return data;
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
  productsChecked,
  totalVenta,
  fchCompra,
  seller,
  cliente
) => {
  try {
   
    const response = await fetch(`${URL}venta/${cliente}/${seller}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "nroVenta" : nroVenta,
        "listaProductos":productsChecked,
        "totalVenta" : totalVenta,
        "cliente" : {},
        "fchCompra": fchCompra,
        "vendedor":{}
      }),
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    if (response) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(`An error has ocurred in Venta: ${error.message}`);
    return false;
  }
};

const ProductRegister = async (
  codProd,
  nombre,
  descripcion,
  precio,
  cantStock,
  imageUrl
) => {
  try {
    const response = await fetch(`${URL}products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        codProd: codProd,
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        cantStock: cantStock,
        imageUrl: imageUrl,
      }),
    });

    if (response.ok) {
      const responseBody = await response.json();
      console.log("Response body:", responseBody);

      if (responseBody.codProd) {
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
    console.error(`An error has ocurred in Producto: ${error.message}`);
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

const getAllClientsVip = async () => {
  try {
    const url = `${URL}clientes/vip`;
    const response = await fetch(url, {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`La solicitud falló  ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Error en la función getAllClientsVip: ${error.message}`);
    throw error;
  }
};

const getAllClientsRegular = async () => {
  try {
    const url = `${URL}clientes/regular`;
    const response = await fetch(url, {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`La solicitud falló  ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Error en la función getAllClientsRegular: ${error.message}`);
    throw error;
  }
};

const deleteClient = async (id) => {
  console.log(id);
  try {
    const url = `${URL}clientes/${id}`;
    const response = await fetch(url, {
      method: `DELETE`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log(`Cliente  eliminado con éxito: ${id}`);
      return true;
    } else {
      console.error(`No se pudo eliminar el cliente: ${id}`);
      return false;
    }
  } catch (error) {
    console.error(`Error al eliminar el cliente: ${error.message}`);
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
      throw new Error(`La solicitud falló  ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Error en la función: ${error.message}`);
    throw error;
  }
};

const getProduct = (codProd) => {
  return new Promise((resolve, reject) => {
    fetch(`${URL}products/${codProd}`, {
      method: `GET`,
    })
      .then((response) => {
        if (!response.ok) {
          const errorMessage = `La solicitud falló con código: ${response.status}`;
          reject(errorMessage);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error.message || "Error desconocido");
      });
  });
};

const getClient = (idCli) => {
  return new Promise((resolve, reject) => {
    fetch(`${URL}clientes/${idCli}`, {
      method: `GET`,
    })
      .then((response) => {
        if (!response.ok) {
          const errorMessage = `La solicitud falló con código: ${response.status}`;
          reject(errorMessage);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error.message || "Error desconocido");
      });
  });
};
const updateClient = async (idCli, nombre, direccion, telefono, fchIngreso) => {
  console.log(idCli)
  try {
    const response = await fetch(`${URL}clientes`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idCli, nombre, direccion, telefono, fchIngreso }),
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error(`An error has occurred in updateClient: ${error.message}`);
    throw error;
  }
};

const updateProduct = async (codProd,updatedProductData) => {
  try {
    const response = await fetch(`${URL}products`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        codProd: codProd,
        ...updatedProductData,
      }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(`La solicitud PUT falló con código ${response.status}. Detalles: ${JSON.stringify(errorResponse)}`);
    }
    

    const updatedProduct = await response.json();
    console.log('Producto actualizado:', updatedProduct);
    return updatedProduct;
  } catch (error) {
    console.error(`An error has occurred in updateClient: ${error.message}`);
    throw error;
  }
};

const VentaPorCliente = async (id) => {
  try {
    const response = await fetch(`${URL}ventas/clientes/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    const ventas = await response.json();
    return ventas;
  } catch (error) {
    console.error(`An error has occurred in VentaPorCliente: ${error.message}`);
    return [];
  }
};

const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${URL}products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error(`An error has occurred in DeleteProduct: ${error.message}`);
    return false;
  }
};

const RegisterVendedor = async (
 nroVendedor,
  nombre,
  Contraseña
) => {
  try {
    const response = await fetch(`${URL}vendedor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nroVendedor: nroVendedor,
        nombre: nombre,
        password: Contraseña
      }),
    });

    if (response.ok) {
      const responseBody = await response.json();
      console.log("Response body:", responseBody);

        console.log("Registro exitoso");
        return true;
    } else {
      console.error("Error en la solicitud:", response.status);
      return false;
    }
  } catch (error) {
    console.error(`An error has ocurred in Producto: ${error.message}`);
    return false;
  }
};

const getProductStockMenor = (cantStock) => {
  console.log(cantStock)
  return new Promise((resolve, reject) => {
    fetch(`${URL}products/stockMenor/${cantStock}`, {
      method: `GET`,
    })
      .then((response) => {
        if (!response.ok) {
          const errorMessage = `La solicitud falló con código: ${response.status}`;
          reject(errorMessage);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error.message || "Error desconocido");
      });
  });
};

const getProductClient = (idCli) => {
  console.log("ke " + idCli)
  return new Promise((resolve, reject) => {
    fetch(`${URL}venta/client/${idCli}`, {
      method: `GET`,
    })
      .then((response) => {
        if (!response.ok) {
          const errorMessage = `La solicitud falló con código: ${response.status}`;
          reject(errorMessage);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.log("Error en getProductClient:", error);
        reject(error.message || "Error desconocido");
      });
  });
};

const getVentaPerDate = (fecha) => {
  console.log("Para pensar" + fecha)
  return new Promise((resolve, reject) => {
    fetch(`${URL}venta/fecha/${fecha}`, {
      method: `GET`,
    })
      .then((response) => {
        if (!response.ok) {
          const errorMessage = `La solicitud falló con código: ${response.status}`;
          reject(errorMessage);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error.message || "Error desconocido");
      });
  });
};



export {
  logIn,
  getAllProducts,
  ClientRegister,
  getProduct,
  ProductRegister,
  VentaRegister,
  getAllClientsVip,
  getAllClientsRegular,
  deleteClient,
  getClient,
  updateClient,
  updateProduct,
  deleteProduct,
  RegisterVendedor,
  getProductStockMenor,
  getProductClient,
  getVentaPerDate
};
