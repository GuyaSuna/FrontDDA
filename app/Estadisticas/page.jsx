'use client'
import React, { useState } from "react";
import { getProductStockMenor } from "../../Api/api"; 

const StatsPage = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFetchData = async () => {
    try {
      let result = [];

      switch (selectedOption) {
        case "option1":
          result = await getProductStockMenor(parseInt(inputValue));
          break;
        // case "option2":
        //   result = await getCustomerPurchases(inputValue);
        //   break;
        // case "option3":
        //   result = await getPurchasesByDate(inputValue);
        //   break;
        default:
          break;
      }


      console.log(result);
      setData(result.data);
    } catch (error) {
     console.error("Error fetching data:");
    }
  }
  
  return (
    <div className="container mx-auto mt-8 bg-gray-200 p-4 rounded">
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
            className="border rounded p-2"
          />
        </div>

        <button onClick={handleFetchData} className="mt-2 bg-blue-500 text-white p-2 rounded">
          Obtener Datos
        </button>

        {/* Muestra la información obtenida */}
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Resultados:</h2>
          <ul>
          {data && Array.isArray(data) ? (
            data.map((item, index) => (
              <li key={index}>Producto:{item.nombre}  ---  Precio : {item.precio}  ---   Cantidad : {item.cantStock}</li>
               ))
              ) : (
                <p>No hay datos disponibles.</p>
          )}
          </ul>
        </div>
      </div>
    </div>
  );

};

  export default StatsPage;

