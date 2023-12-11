"use client"; 
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const ProductPage = () => {
  const router = useRouter();

  const [image, setImage] = useState();
  const [stock, setStock] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleStockChange = (e) => {
    setStock(e.target.value);
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.value[0];
  //   setImage(file);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes enviar los datos del formulario, incluida la imagen, a tu servidor

    // Después de enviar los datos, puedes redirigir a la página de inicio o a donde sea necesario
    router.push("/Productos");
  };

  return (
    <main className="h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Agregar Producto</h1>
        <form>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Descripcion
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={handleDescriptionChange}
              className="mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Precio
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={handlePriceChange}
              className="mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={stock}
              onChange={handleStockChange}
              className="mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
            />
          </div>

          {/* <div className="mb-6">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-600"
            >
              Agregar una imagen
            </label>
            <input
              type="file"
              id="image"
              name="image"
              value={image}
              onChange={handleImageChange}
              accept="image/"
              className="mt-1 p-2 w-full border-b-2 border-green-500 focus:outline-none focus:border-green-700"
            />
          </div> */}
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
            // onClick={() => router.push("/")}
          >
            Agregar
          </button>
        </form>
      </div>
    </main>
  );
};

export default ProductPage;
