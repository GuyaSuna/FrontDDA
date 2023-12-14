import React from "react";

const ComprasCliente = () => {
  return (
    <div>
      <div>
        <h1>Compras por Cliente</h1>
        <ul>
          {ventas.map((venta, index) => (
            <li key={index}>
              {/* Renderiza aquí los detalles de cada venta */}
              Venta ID: {venta.id}, Total: {venta.totalVenta}, Fecha:{" "}
              {venta.fchCompra}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComprasCliente;
