"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { ProductRegister } from "../../Api/api";

const ProductPage = () => {
  const router = useRouter();

  const [imageUrl, setImage] = useState("");
  const [cantStock, setStock] = useState("");
  const [precio, setPrice] = useState("");
  const [descripcion, setDescription] = useState("");
  const [nombre, setNombre] = useState("");
  const [codProd, setCodPro] = useState("");

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleStockChange = (e) => {
    setStock(e.target.value);
  };

  const handleCodProChange = (e) => {
    const newValue = e.target.value.toString();
    setCodPro(newValue);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleProductRegister = async (e) => {
    e.preventDefault();
    console.log("ABRRRRRRRRRRRRR");

    try {
      const success = await ProductRegister(
        codProd,
        nombre,
        descripcion,
        precio,
        cantStock,
        imageUrl
      );

      if (success) {
        router.push("/AllProducts");
      } else {
        console.log("Registro fallido");
      }
    } catch (error) {
      console.error("Error durante el registro:", error);
    }
  };

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
              onChange={handleCodProChange}
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
              onChange={handleDescriptionChange}
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
              onChange={handlePriceChange}
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
            onClick={handleProductRegister}
          >
            Agregar
          </button>
        </form>
      </div>
    </main>
  );
};

export default ProductPage;
