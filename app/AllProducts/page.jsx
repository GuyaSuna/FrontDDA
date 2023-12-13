"use client";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAllProducts } from "../../Api/api";
// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import Link from "next/link";
import { useRouter } from "next/navigation";

const allProducts = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchFiltered, setSearchFiltered] = useState(products);

  const links = [
    {
      label: "DetailProduct",
      route: "./DetailProduct",
    },
    {
      label: "Productos",
      route: "./Productos",
    },
  ];
  const fetchData = async () => {
    try {
      const data = await getAllProducts();
      console.log("Data:", data);
      setProducts(data);
    } catch (error) {
      console.error(`Error fetching data: ${error.message}`);
    }
  };
  // const handleDetail = codProd => {
  //   console.log("Código del producto:", codProd);
  //   router.push(`/DetailProduct/?codProd=1`);
  // };
  const handleDetail = codProd => {
    console.log("Código del producto:", codProd);
    router.push(`/DetailProduct/?codProd=${codProd}`);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const styles = {
    body: {
      fontFamily: "'Poppins', sans-serif",
    },
    hoverWFull: {
      width: "100%",
    },
    groupHoverWFull: {
      width: "100%",
    },
    groupHoverInlineBlock: {
      display: "inline-block",
    },
    groupHoverFlexGrow: {
      flexGrow: 1,
    },
  };
  return (
    <>
        <div className="w-full max-w-md mx-auto">
          <div className="px-7 bg-white shadow-lg rounded-2xl">
            <div className="flex">
              <div className="flex-1 group">
                <a
                  href="/Productos"
                  className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
                >
                  <span className="block px-1 pt-1 pb-1">
                    <i className="far fa-home text-2xl pt-1 mb-1 block" />
                    <span className="block text-xs pb-2">Agregar Producto</span>
                    <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full" />
                  </span>
                </a>
              </div>
              <div className="flex-1 group">
                <a
                  href="#"
                  className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
                >
                  <span className="block px-1 pt-1 pb-1">
                    <i className="far fa-compass text-2xl pt-1 mb-1 block" />
                    <span className="block text-xs pb-2">Explore</span>
                    <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-3 gap-6.5 m-3">
        {products &&
          products.map(product => (
            <div
              key={product.codProd}
              className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
            >
              <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-sm border border-gray-200">
                <img
                  src={product.imageUrl}
                  className="h-full w-full object-cover"
                  alt={product.nombre}
                />
              </div>
              <div className="p-6 ">
                <div className="mb-2 flex items-center justify-between ">
                  <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                    {product.nombre}
                  </p>
                  <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                    ${product.precio}
                  </p>
                </div>
                <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                  {product.description}
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  onClick={() => handleDetail(product.codProd)}
                >
                  Ver detalle
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default allProducts;
