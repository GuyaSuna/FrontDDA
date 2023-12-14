"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { getAllClientsVip, getAllClientsRegular } from "../../Api/api";
import { useState, useEffect } from "react";
import clientes from "../Clientes/page";
import { deleteClient } from "../../Api/api";
import Link from "@/node_modules/next/link";

const AllClientsPage = () => {
  const router = useRouter([]);
  const [vipClients, setVipClients] = useState([]);
  const [regularClients, setRegularClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  const fetchVipClients = async () => {
    try {
      const vipData = await getAllClientsVip();
      console.log(vipData);
      if (vipData && Array.isArray(vipData)) {
        setVipClients(vipData);
      } else {
        console.error("Los datos de clientes VIP no son válidos.");
      }
    } catch (error) {
      console.error(`Error fetching VIP clients: ${error.message}`);
    }
  };

  const fetchRegularClients = async () => {
    try {
      const regularData = await getAllClientsRegular();
      console.log(regularData);
      if (regularData && Array.isArray(regularData)) {
        setRegularClients(regularData);
      } else {
        console.error("Los datos de clientes regulares no son válidos.");
      }
    } catch (error) {
      console.error(`Error fetching regular clients: ${error.message}`);
    }
  };

  const handleDetail = (id) => {
    console.log("Código del Cliente:", id);
    router.push(`/Clientes`);
  };

  useEffect(() => {
    fetchVipClients();
    fetchRegularClients();
  }, []);

  const handleRegularClientDelete = async (id) => {
    try {
      const response = await deleteClient(id, false);

      if (response) {
        const updatedRegularClients = regularClients.filter(
          (client) => client.idCli !== id
        );
        setRegularClients(updatedRegularClients);
        console.log(`Cliente regular eliminado con éxito: ${id}`);
      } else {
        console.error(`No se pudo eliminar el cliente regular: ${id}`);
      }
    } catch (error) {
      console.error(`Error al eliminar el cliente regular: ${error.message}`);
    }
  };

  const handleVipClientDelete = async (id) => {
    try {
      const response = await deleteClient(id, true);

      if (response) {
        const updatedVipClients = vipClients.filter(
          (client) => client.idCli !== id
        );
        setVipClients(updatedVipClients);
        console.log(`Cliente VIP eliminado con éxito: ${id}`);
      } else {
        console.error(`No se pudo eliminar el cliente VIP: ${id}`);
      }
    } catch (error) {
      console.error(`Error al eliminar el cliente VIP: ${error.message}`);
    }
  };
  const handleClientClick = (clientId) => {
    sessionStorage.setItem("idCli", clientId.toString());
    router.push(`/UpdateClient/${clientId}`);
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto mb-10">
        <div className="px-7 bg-white shadow-lg rounded-2xl">
          <div className="flex">
            <div className="flex-1 group">
              <a
                href="/Clientes"
                className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
              >
                <span className="block px-1 pt-1 pb-1">
                  <i className="far fa-home text-2xl pt-1 mb-1 block" />
                  <span className="block text-xs pb-2">Agregar Clientes</span>
                  <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 p-4 gap-4">
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
          <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div className="mb-4">
              <h1 className="text-3xl font-bold mb-4 text-center">
                Clientes VIP
              </h1>
            </div>
            {vipClients.map((client) => (
              <div
                key={client.idCli}
                onClick={() => setSelectedClient(client.idCli)}
                className={` ${
                  selectedClient === client.idCli
                    ? "text-blue-500 bg-gray-200"
                    : "text-black bg-white"
                } text-base`}
              >
                <div className="flex mb-4 items-center">
                  <p className="w-full text-grey-darkest">
                    <strong>Nombre:</strong> {client.nombre} -{" "}
                    <strong>Dirección:</strong> {client.direccion} -{" "}
                    <strong>Teléfono:</strong> {client.telefono} -{" "}
                    <strong>Fecha de Ingreso:</strong> {client.fchIngreso}
                  </p>
                  <Link
                    onClick={() => {
                      sessionStorage.setItem("idCli", client.idCli.toString());
                    }}
                    href="/UpdateClient"
                    className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-black text-green border-green bg-amber-200 hover:bg-slate-300"
                  >
                    Modificar
                  </Link>
                  <button
                    onClick={() => handleVipClientDelete(client.idCli)}
                    className="flex-no-shrink p-2 ml-2 border-2 rounded text-white border-red hover:text-black bg-red-400 hover:bg-slate-300"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
          <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div className="mb-4">
              <h1 className="text-3xl font-bold mb-4 text-center">
                Clientes REGULAR
              </h1>
            </div>
            {regularClients.map((client) => (
              <div
                key={client.idCli}
                onClick={() => setSelectedClient(client.idCli)}
              >
                <div className="flex mb-4 items-center">
                  <p className="w-full text-grey-darkest">
                    <strong>Nombre:</strong> {client.nombre} -{" "}
                    <strong>Dirección:</strong> {client.direccion} -{" "}
                    <strong>Teléfono:</strong> {client.telefono} -{" "}
                  </p>
                  <Link
                    onClick={() => {
                      sessionStorage.setItem("idCli", client.idCli.toString());
                    }}
                    href="/UpdateClient"
                    className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-black text-green border-green bg-amber-200 hover:bg-slate-300"
                  >
                    Modificar
                  </Link>
                  <button
                    onClick={() => handleRegularClientDelete(client.idCli)}
                    className="flex-no-shrink p-2 ml-2 border-2 rounded text-white border-red hover:text-black bg-red-400 hover:bg-slate-300"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllClientsPage;
