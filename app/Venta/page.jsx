'use client'
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { VentaRegister, getAllProducts } from "../../Api/api";
import { useUsuario } from "../../Context/userContext";

const Venta = () => {
  const { usuario } = useUsuario();

  const [ventaNumber, setVentaNumber] = useState("");
  const [client, setClient] = useState("");
  const [seller, setSeller] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [productList, setProductList] = useState([]);
  const [productsChecked, setProductsChecked] = useState([]);
  const [totalSale, setTotalSale] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleProductSelect = (product) => {
    setProductsChecked((prevProducts) => [
      ...prevProducts,
      { ...product, cantidad: 1 },
    ]);
    console.log(product)
    calculateTotalSaleAdd(product.precio);
  };
  const calculateTotalSaleAdd = (precio) => {
    setTotalSale(totalSale + precio);
  };

  const calculateTotalSaleRemove = (precio) => {
    setTotalSale(totalSale - precio);
  };

  const handleDeleteProductSelect = (index , precio) => {
    setProductsChecked((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts.splice(index, 1);
      return updatedProducts;
    });
    calculateTotalSaleRemove(precio); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("ABRRRRRRRRRRRRR");

    try {
      const success = await VentaRegister(
        ventaNumber,
        productsChecked,
        totalSale,
        purchaseDate,
        seller,
        client
      );

      if (success) {
        router.push("/");
      } else {
        console.log("Inicio de sesión fallido");
      }
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
    }
  };

  const fetchData = async () => {
    try {
      const data = await getAllProducts();
      console.log("Data:", data);
      setProductList(data);
    } catch (error) {
      console.error(`Error fetching data: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(usuario);
  }, [usuario]);

  const handleProductAdd = () => {
    openModal();
  };
  return (
    <>
    {usuario && usuario.nroVendedor !== null && (
      <main
        className="h-screen flex items-center justify-center bg-cover"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/vector-premium/fondo-abstracto-azul-linea-luz-verde-espacio-blanco_156943-56.jpg')",
        }}
      >
        <div className="container mx-auto my-8 p-8 bg-gray-100 shadow-md rounded-md">
          <h2 className="text-3xl font-bold mb-6">Venta Details</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Venta Number
            </label>
            <input
              type="text"
              className="form-input mt-1 block w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:border-blue-500"
              value={ventaNumber}
              onChange={(e) => setVentaNumber(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Client
            </label>
            <input
              type="text"
              className="form-input mt-1 block w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:border-blue-500"
              value={client}
              onChange={(e) => setClient(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Seller
            </label>
            <input
              type="text"
              className="form-input mt-1 block w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:border-blue-500"
              value={usuario.nroVendedor}
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Purchase Date
            </label>
            <input
              type="text"
              className="form-input mt-1 block w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:border-blue-500"
              value={purchaseDate}
              onChange={(e) => setPurchaseDate(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Product List
            </label>
            <ul className="list-disc list-inside">
              <button
                type="button"
                onClick={handleProductAdd}
                className="text-blue-500"
              >
                Add Product
              </button>
            </ul>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Products Selected
            </label>
            <ul className="list-inside">
              {productsChecked.map((product, index) => (
                <li key={index} className="mb-2">
                  <div className="flex items-center">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
                      {product.nombre}
                    </div>
                    <button
                      onClick={() => handleDeleteProductSelect(index , product.precio)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Total Sale
            </label>
            <input
              type="text"
              className="form-input mt-1 block w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:border-blue-500"
              value={totalSale}
              readOnly
            />
          </div>

          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Product List Modal"
        >
          <h2 className="text-2xl font-bold mb-4">Product List</h2>
          <div className="flex flex-wrap justify-center">
            {productList.map((product, index) => (
              <div
                key={product.id}
                className="flex-shrink-0 bg-white p-4 rounded-md shadow-md flex flex-col items-center m-2"
                style={{ width: "150px" }}
              >
                <img
                  src={product.imageUrl}
                  alt={product.nombre}
                  className="mb-2 rounded-md"
                  style={{ width: "100%", height: "100px", objectFit: "cover" }}
                />
                <p className="text-lg font-semibold">{product.nombre}</p>
                <button
                  onClick={() => handleProductSelect(product)}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Add
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={closeModal}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Close
          </button>
        </Modal>
      </main>
    )}
    {usuario == null && (
  <div className="alert-message">
    INGRESE SESIÓN POR FAVOR, AGUSTÍN
    <style jsx>{`
      .alert-message {
        background-color: #ffcccc; 
        color: #cc0000; 
        padding: 10px;
        border-radius: 5px;
        margin-top: 10px;
        text-align: center;
      }
    `}</style>
  </div>
)}
  </>
  );
};

export default Venta;

























// pages/venta.js
// import React from 'react';

// const VentaPage = ({ ventaData }) => {
//   return (
//     <div className="container mx-auto my-8 p-8 bg-gray-100 shadow-md rounded-md">
//       <h2 className="text-3xl font-bold mb-6">Venta Details</h2>

//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-600">Venta Number</label>
//         <input type="text" className="form-input mt-1 block w-full" value={ventaData.nroVenta} readOnly />
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-600">Client</label>
//         <input type="text" className="form-input mt-1 block w-full" value={ventaData.cliente} readOnly />
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-600">Seller</label>
//         <input type="text" className="form-input mt-1 block w-full" value={ventaData.vendedor} readOnly />
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-600">Purchase Date</label>
//         <input type="text" className="form-input mt-1 block w-full" value={ventaData.fchCompra} readOnly />
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-600">Product List</label>
//         <ul className="list-disc list-inside">
//           {ventaData.listaProductos.map((producto, index) => (
//             <li key={index}>{producto.nombre}</li>
//           ))}
//         </ul>
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-600">Total Sale</label>
//         <input type="text" className="form-input mt-1 block w-full" value={ventaData.totalVenta} readOnly />
//       </div>

//       <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
//     </div>
//   );
// };

// export default VentaPage;

// // Puedes obtener los datos de la venta desde tu backend y pasarlos como props a esta página
// VentaPage.getInitialProps = async () => {
//   // Simula obtener datos desde tu API o base de datos
//   const ventaData = {
//     nroVenta: 1,
//     cliente: 'Nombre del Cliente',
//     vendedor: 'Nombre del Vendedor',
//     fchCompra: '2023-12-12',
//     listaProductos: [{ nombre: 'Producto 1' }, { nombre: 'Producto 2' }],
//     totalVenta: 1000,
//   };

//   return { ventaData };
// };
