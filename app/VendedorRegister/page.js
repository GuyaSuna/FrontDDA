"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { vendedorRegister } from "../../Api/api";

const VendedorRegister = () => {
  const router = useRouter();

  const [nroVendedor, setNroVendedor] = useState("");
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNroVendedorChange = (e) => {
    const newValue = e.target.value.toString();
    setNroVendedor(newValue);
  };

  

  const handleVendedorRegister = async (e) => {
    e.preventDefault();
    console.log("VENDEDOR REGISTER");

    try {
      const success = await vendedorRegister(
        nroVendedor,
        nombre,
        password,
      );
      if (success) {
        router.push("/LogIn");
      } else {
        console.log("Registro fallido en la page");
      }
    } catch (error) {
      console.error("Error durante el registro:", error);
    }
  };

  return (
    <main className="h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Registro </h1>
        <form>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">
              Numero del vendedor
            </label>
            <input
              type="text"
              id="nroVendedor"
              name="nroVendedor"
              value={nroVendedor}
              onChange={handleNroVendedorChange}
              className="mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">
              Nombre 
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
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
            />
          </div>
          <button
            type="button"
            className="bg-blue-500 ml-10 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            onClick={() => router.push("/LogIn")}
          >
            Volver
          </button>

          <button
            type="button"
            className="bg-blue-500 ml-10 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            onClick={handleVendedorRegister}
          >
           Registrar
          </button>
        </form>
      </div>
    </main>
  );
};

export default VendedorRegister;
