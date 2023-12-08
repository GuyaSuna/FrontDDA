'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import LoginPage from "../LogIn/page";
import Link from "next/link";

const clientes = () => {
  const router = useRouter();

  const [clientName, setClientName] = useState("");
  const [esVip, setEsVip] = useState(false);
  const [clientDirection, setClientDirection] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientDate, setClientDate] = useState("");

  const handleClientNameChange = (e) => {
    setClientName(e.target.value);
  };
  const handleClientDirectionChange = (e) => {
    setClientDirection(e.target.value);
  };

  const handleClientPhoneChange = (e) => {
    setClientPhone(e.target.value);
  };

  const handleClientDateChange = (e) => {
    setClientDate(e.target.value);
  };

  const handleCheckboxChange = (event) => {
    setEsVip(event.target.checked);
  };

  return (
    <main className="h-screen flex items-center justify-center bg-gray-900">
      <form className="mx-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl border p-4 border-gray-500 bg-gray-200 m-72">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Alta Clientes
            </h2>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="check"
                name="check"
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="check" className="ml-2 text-gray-700">
                Cliente VIP
              </label>
              <svg
                className="w-6 h-6 text-green-500 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600"
              >
                Nombre
              </label>
              <input
                type="text"
                id="clientName"
                name="clientName"
                value={clientName}
                onChange={handleClientNameChange}
                className="mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600"
              >
                Direccion
              </label>
              <input
                type="text"
                id="clientDirection"
                name="clientDirection"
                value={clientDirection}
                onChange={handleClientDirectionChange}
                className="mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600"
              >
                Telefono (* Ingrese solo numeros)
              </label>
              <input
                type="number"
                id="clientPhone"
                name="clientPhone"
                value={clientPhone}
                onChange={handleClientPhoneChange}
                className="mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
              />
            </div>
            {esVip && (
              <div className="block text-sm font-medium text-gray-600">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="region"
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
                      onChange={handleClientDateChange}
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link
            type="button"
            className="bg-blue-500 ml-10 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            href = "/"
          >
            Volver
          </Link>
          <button
            type="button"
            className="bg-blue-500 ml-10 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Registrar
          </button>
        </div>
      </form>
    </main>
  );
};

export default clientes;
