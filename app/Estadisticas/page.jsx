"use client";
import React, { use, useState } from "react";
import {
  getProductStockMenor,
  getProductClient,
  getVentaPerDate,
} from "../../Api/api";

const StatsPage = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [inputValue, setInputValue] = useState("");
  const [inputDateValue, setInputDateValue] = useState("");
  const [cantCompras, setCantCompras] = useState(0);
  const [data, setData] = useState([]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputDateChange = (e) => {
    setInputDateValue(e.target.value);
    setInputValue(e.target.value);
  };

  const handleFetchData = async () => {
    let result = [];
    switch (selectedOption) {
      case "option1":
        result = await getProductStockMenor(parseInt(inputValue));
        setData(result.data);
        break;
      case "option2":
        result = await getProductClient(parseInt(inputValue));
        setCantCompras(result);
        break;
      case "option3":
        result = await getVentaPerDate(inputDateValue);
        setData(result.data);
        break;
      default:
        break;
    }

    console.log(result);
  };

  return (
    <div className="container mx-auto mt-8 bg-white p-4 rounded">
      <h1 className="text-3xl font-semibold mb-4">Estadísticas</h1>

      <div className="flex space-x-4">
        <label>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />
          Productos con stock menor a:
        </label>
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
          />
          Compras de un cliente:
        </label>
        <label>
          <input
            type="radio"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
          />
          Compras de una fecha:
        </label>
      </div>

      <div className="mt-4">
        <div className="flex items-center">
          <label className="mr-2">
            {selectedOption === "option1" && "Cantidad mínima de stock:"}
            {selectedOption === "option2" && "ID del cliente:"}
            {selectedOption === "option3" && "Fecha (YYYY-MM-DD):"}
          </label>

          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="border-2 border-black rounded  p-2"
          />

          {selectedOption == "option3" && (
            <input
              type="date"
              value={inputValue}
              onChange={handleInputDateChange}
              className="border rounded p-2"
            />
          )}
        </div>

        <button
          onClick={handleFetchData}
          className="mt-2 bg-gray-800 text-white p-2 rounded"
        >
          Obtener Datos
        </button>

        {selectedOption === "option1" && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Resultados:</h2>
            <ul>
              {data && Array.isArray(data) ? (
                data.map((item, index) => (
                  <li key={index}>
                    Producto:{item.nombre} --- Precio : {item.precio} ---
                    Cantidad : {item.cantStock}
                  </li>
                ))
              ) : (
                <p>No hay datos disponibles.</p>
              )}
            </ul>
          </div>
        )}

        {selectedOption === "option2" && (
          <li>
            La cantidad de compras que ha realizado este cliente son:{" "}
            {cantCompras}
          </li>
        )}

        {selectedOption === "option3" && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Resultados:</h2>
            <ul>
              {data && Array.isArray(data) ? (
                data.map((item, index) => (
                  <li key={index}>
                    Producto:{item.nroVenta} --- Total Venta : {item.totalVenta}{" "}
                    --- Fecha Venta : {item.fchCompra}
                  </li>
                ))
              ) : (
                <p>No hay datos disponibles.</p>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsPage;
