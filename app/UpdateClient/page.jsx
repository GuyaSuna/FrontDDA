"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getClient } from "../../Api/api";

import Link from "next/link";

const UpdateClient = () => {
  const router = useRouter();

  const [idCli , setIdCli] = useState(0);
  const [client, setClient] = useState({});
  const [clientName, setClientName] = useState("");
  const [clientDirection, setClientDirection] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientDate, setClientDate] = useState("");
  const [esVip, setEsVip] = useState(false);

  useEffect(() => {
    console.log("lo que vos quieras poner");
    setIdCli(sessionStorage.getItem("idCli"));
    console.log("Código del cliente:",idCli);
  }, []);

  useEffect(() => {
    if (idCli) {
      const fetchProductDetails = async () => {
        try {
          const details = await getClient(idCli);
          console.log( details)
          setClientName(details.nombre)
          setClientDirection(details.direccion)
          setClientPhone(details.telefono)
          if(details.fchIngreso != null){
            setClientDate(details.fchIngreso )
            setEsVip(true)
          }
          
          setClient(details);
        
        } catch (error) {
          console.error("Error al cargar detalles del producto:", error);
        }
      };

      fetchProductDetails();
    }
  }, [idCli]);
  const handleCheckboxChange = (event) => {
    setEsVip(event.target.checked);
  };

  const handleClientUpdate = async (e) => {
    e.preventDefault();
    try {
      const success = await updateClient(client.idCli, {
        nombre: clientName,
        direccion: clientDirection,
        telefono: clientPhone,
        fchIngreso: clientDate,
      });

      if (success) {
        router.push("/");
      } else {
        console.log("Actualización fallida");
      }
    } catch (error) {
      console.error("Error durante la actualización del cliente:", error);
    }
  };

  return (
    <main className="h-screen flex items-center justify-center bg-gray-900">
      <form className="mx-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl border p-4 border-gray-500 bg-gray-200 m-72">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Actualizar Cliente
            </h2>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="check"
                name="check"
                checked={esVip}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="check" className="ml-2 text-gray-700">
                Cliente VIP
              </label>
              {/* Agregar icono o indicador visual para Cliente VIP aquí */}
            </div>
            <div className="mb-6">
              <label
                htmlFor="clientName"
                className="block text-sm font-medium text-gray-600"
              >
                Nombre
              </label>
              <input
                type="text"
                id="clientName"
                name="clientName"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="clientDirection"
                className="block text-sm font-medium text-gray-600"
              >
                Dirección
              </label>
              <input
                type="text"
                id="clientDirection"
                name="clientDirection"
                value={clientDirection}
                onChange={(e) => setClientDirection(e.target.value)}
                className="mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="clientPhone"
                className="block text-sm font-medium text-gray-600"
              >
                Teléfono (* Ingrese solo números)
              </label>
              <input
                type="number"
                id="clientPhone"
                name="clientPhone"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
              />
            </div>
            {esVip && (
              <div className="block text-sm font-medium text-gray-600">
                <label
                  htmlFor="clientDate"
                  className="block text-sm font-medium text-gray-600"
                >
                  Fecha de Ingreso
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    id="clientDate"
                    name="clientDate"
                    value={clientDate}
                    onChange={(e) => setClientDate(e.target.value)}
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link
            href="/"
            className="bg-blue-500 ml-10 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Volver
          </Link>
          <button
            type="button"
            onClick={handleClientUpdate}
            className="bg-blue-500 ml-10 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Actualizar
          </button>
        </div>
      </form>
    </main>
  );
};

export default UpdateClient;
