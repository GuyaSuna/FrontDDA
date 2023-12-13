"use client";

import { useRouter } from 'next/navigation';
import React from 'react'
import {updateProduct, getProduct} from "../../Api/api";
import { useState, useEffect } from "react";

const updateProducts = () => {
  const router = useRouter();

  const [imageUrl, setImage] = useState("");
  const [cantStock, setStock] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [nombre, setNombre] = useState("");
  const [codProd, setCodProd] = useState("");
  const [product, setProductDetails] = useState([]);
  
  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handlePrecioChange = (e) => {
    setPrecio(e.target.value);
  };

  const handleStockChange = (e) => {
    setStock(e.target.value);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      console.log(imageUrl)
      setImage(imageUrl);
    }
  };
    const handleUpdateProduct = async () => {
        const codProd = 1; 
        const updatedProductData = {
          nombre,
          descripcion,
          precio,
          cantStock,
          imageUrl, 
        };
      
        try {
          await updateProduct(codProd, updatedProductData);
          console.log('Producto actualizado con éxito');
        } catch (error) {
          console.error('Error al actualizar el producto:', error);
        }
      };

      useEffect(() => {
        setCodProd(sessionStorage.getItem('codProd'));
         console.log('Código del producto:', codProd);
       }, []);
     
     
       useEffect(() => {
        if (codProd) {
          const fetchProductDetails = async () => {
            try {
              const details = await getProduct(codProd);
              console.log(details)
              setNombre(details.nombre);
              setDescripcion(details.descripcion);
              setPrecio(details.precio);
              setStock(details.cantStock);
              setImage(details.imageUrl);
              setProductDetails(details);
            } catch (error) {
              console.error("Error al cargar detalles del producto:", error);
            }
          };
    
          fetchProductDetails();
        }
      }, [codProd]);
      //  useEffect(() => {
      //   if (codProd) {
      //     const fetchUpdateProduct = async () => {
      //       try {
      //         // Aquí deberías obtener los detalles del producto, no realizar la actualización
      //         const productDetails = await getProduct(codProd); // Necesitas implementar esta función
      //         // Ahora, puedes actualizar los estados con los detalles del producto
      //         setNombre(productDetails.nombre);
      //         setDescription(productDetails.descripcion);
      //         setPrecio(productDetails.precio);
      //         setStock(productDetails.cantStock);
      //         setImage(productDetails.imageUrl);
      //       } catch (error) {
      //         console.error('Error al cargar detalles del producto:', error);
      //       }
      //     };
    
      //     fetchUpdateProduct();
      //   }
      // }, [codProd]);
    
  return (
    <main className="h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Agregar Producto</h1>
        <form>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">
              Codigo del Producto
            </label>
            <input
              type="text"
              id="codProd"
              name="codPro"
              value={codProd}
              className="mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">
              Nombre del Producto
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={handleNombreChange}
              className="mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">
              Descripcion
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={descripcion}
              onChange={handleDescripcionChange}
              className="mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">
              Precio
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={precio}
              onChange={handlePrecioChange}
              className="mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={cantStock}
              onChange={handleStockChange}
              className="mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">
              Agregar una imagen
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              accept="image/"
              className="mt-1 p-2 w-full border-b-2 border-green-500 focus:outline-none focus:border-green-700"
            />
          </div>
          <button
            type="button"
            className="bg-blue-500 ml-10 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            onClick={() => router.push("/")}
          >
            Volver
          </button>
          <button
            type="button"
            className="bg-blue-500 ml-10 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            onClick={handleUpdateProduct}
          >
            Modificar
          </button>
        </form>
      </div>
    </main>
  )
}

export default updateProducts