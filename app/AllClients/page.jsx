"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { getAllClientsVip, getAllClientsRegular } from "../../Api/api";
import { useState, useEffect } from "react";
import clientes from "../Clientes/page";
import { deleteClient } from "../../Api/api";

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
  
      sessionStorage.setItem("idCli", clientId);
      router.push(`/UpdateClient/${clientId}`);
    
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          flex: "1",
          marginRight: "10px",
          flexBasis: "45%",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ textAlign: "center", color: "white" }}>Clientes VIP</h2>
        {vipClients.map((client) => (
          <div
            key={client.idCli}
            onClick={() => setSelectedClient(client.idCli)}
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "10px",
              cursor: "pointer",
              color: selectedClient === client.idCli ? "blue" : "black",
              background: selectedClient === client.idCli ? "#eee" : "white",
              maxWidth: "100%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <strong>Nombre:</strong> {client.nombre} -
                <strong>Dirección:</strong> {client.direccion} -
                <strong>Teléfono:</strong> {client.telefono} -
                <strong>Fecha de Ingreso:</strong> {client.fchIngreso}
              </div>
              <div>
                <button
                  onClick={() => handleVipClick(client.idCli)}
                  style={{
                    color: "black",
                    backgroundColor: "yellow",
                    border: "none",
                    padding: "6px",
                    borderRadius: "4px",
                    marginRight: "5px",
                    fontSize: "10px",
                  }}
                >
                  Editar
                </button>
                <button
                  onClick={() => handleVipClientDelete(client.idCli)}
                  style={{
                    color: "black",
                    backgroundColor: "red",
                    border: "none",
                    padding: "6px",
                    borderRadius: "4px",
                    fontSize: "10px",
                  }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          flex: "1",
          marginLeft: "10px",
          flexBasis: "45%",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ textAlign: "center", color: "white" }}>
          Clientes Regulares
        </h2>
        {regularClients.map((client) => (
          <div
            key={client.idCli}
            onClick={() => setSelectedClient(client.idCli)}
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "10px",
              cursor: "pointer",
              color: selectedClient === client.idCli ? "blue" : "black",
              background: selectedClient === client.idCli ? "#eee" : "white",
              fontSize: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <strong>Nombre:</strong> {client.nombre} -
                <strong>Dirección:</strong> {client.direccion} -
                <strong>Teléfono:</strong> {client.telefono} -
                <strong>id:</strong> {client.idCli} -
              </div>
              <div>
                <button
                  onClick={() => handleRegularClick(client.idCli)}
                  style={{
                    color: "black",
                    backgroundColor: "yellow",
                    border: "none",
                    padding: "6px",
                    borderRadius: "4px",
                    marginRight: "5px",
                    fontSize: "10px",
                  }}
                >
                  Editar
                </button>
                <button
                  onClick={() => handleRegularClientDelete(client.idCli)}
                  style={{
                    color: "black",
                    backgroundColor: "red",
                    border: "none",
                    padding: "6px",
                    borderRadius: "4px",
                    fontSize: "10px",
                  }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClientsPage;
