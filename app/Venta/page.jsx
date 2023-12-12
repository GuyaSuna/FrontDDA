'use client'
import React, { useState } from "react";

const Venta = () => {
  const [ventaNumber, setVentaNumber] = useState("");
  const [client, setClient] = useState("");
  const [seller, setSeller] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [productList, setProductList] = useState([]);
  const [totalSale, setTotalSale] = useState("");

  const handleProductAdd = () => {
    // Lógica para agregar productos a la lista
    // Puedes manejar esto según tus necesidades
  };

  const handleSubmit = () => {
    // Lógica para enviar los datos del formulario
    // Puedes manejar esto según tus necesidades
  };

  return (
    <main
    className="h-screen flex items-center justify-center bg-cover"
    style={{ backgroundImage: "url('https://img.freepik.com/vector-premium/fondo-abstracto-azul-linea-luz-verde-espacio-blanco_156943-56.jpg')" }}
  >
    <div className="container mx-auto my-8 p-8 bg-gray-100 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6">Venta Details</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Venta Number</label>
        <input
          type="text"
          className="form-input mt-1 block w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:border-blue-500"
          value={ventaNumber}
          onChange={(e) => setVentaNumber(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Client</label>
        <input
          type="text"
          className="form-input mt-1 block w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:border-blue-500"
          value={client}
          onChange={(e) => setClient(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Seller</label>
        <input
          type="text"
          className="form-input mt-1 block w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:border-blue-500"
          value={seller}
          onChange={(e) => setSeller(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Purchase Date</label>
        <input
          type="text"
          className="form-input mt-1 block w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:border-blue-500"
          value={purchaseDate}
          onChange={(e) => setPurchaseDate(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Product List</label>
        <ul className="list-disc list-inside">
          {productList.map((product, index) => (
            <div key={index}>{product}</div>
          ))}
          <button type="button" onClick={handleProductAdd} className="text-blue-500">
            Add Product
          </button>
        </ul>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Total Sale</label>
        <input
          type="text"
          className="form-input mt-1 block w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:border-blue-500"
          value={totalSale}
          onChange={(e) => setTotalSale(e.target.value)}
        />
      </div>

      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Submit
      </button>
    </div>
    </main>
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
