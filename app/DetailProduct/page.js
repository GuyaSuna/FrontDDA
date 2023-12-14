"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { deleteProduct, getAllProducts, getProduct } from "../../Api/api";

const detailProduct = () => {
  const router = useRouter();

  const [ codProd ,setCodProd] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [productDetails, setProductDetails] = useState({});


  const handleClick = () => {
    setShowAlert(true);
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleUpdate = () => {
    console.log("Código del update:", codProd);
    router.push(`/UpdateProducts`);
  };

  // const handleDelete = async (e) => {
  //   e.preventDefault();
  //   console.log("Codigo Delete producto:", codProd);

  //   try {
  //     const success = deleteProduct(codProd, setMsg, setSucces, setListaProductos);

  //     if (success) {
  //       router.push("/AllProducts");
  //     } else {
  //       console.log("Eliminacion fallida");
  //     }
  //   } catch (error) {
  //     console.error("Error durante la eliminacion:", error);
  //   }
  // }
  const handleDelete = async (codProd) => {
    console.log("Codigo Delete producto:", codProd);
    try {
      const response = await deleteProduct(codProd, true);

      if (response) {
        router.push("/AllProducts");
        console.log(`Cliente VIP eliminado con éxito: ${codProd}`);
      } else {
        console.error(`No se pudo eliminar el producto: ${codProd}`);
      }
    } catch (error) {
      console.error(`Error al eliminar el cliente VIP: ${error.message}`);
    }
  };

  useEffect(() => {
   setCodProd(sessionStorage.getItem('codProd'));
    console.log('Código del producto:', codProd);
  }, []);


  useEffect(() => {
    if (codProd) {
      const fetchProductDetails = async () => {
        try {
          const details = await getProduct(codProd);
          setProductDetails(details);
        } catch (error) {
          console.error("Error al cargar detalles del producto:", error);
        }
      };

      fetchProductDetails();
    }
  }, [codProd]);
  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <img
          className="w-80 h-80 border-radius rounded-md"
          alt="image of a girl posing"
         src={productDetails.imageUrl}
        />
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
            {productDetails.nombre}
          </h1>
          <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
            Codigo:  {productDetails.codProd}
          </h1>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
           PRECIO
          </p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">
             {productDetails.precio}
            </p>
            <svg
              className="text-gray-300 dark:text-white cursor-pointer"
              width={6}
              height={10}
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L1 9"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <button onClick={handleClick}className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none">
          <svg
            className="mr-3 text-white dark:text-gray-900"
            width={16}
            height={17}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.66699 4.83333V4.84166"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.333 11.5V11.5083"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Ver Disponibilidad
        </button>
        {showAlert && (
        <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md " role="alert">
          <div className="flex justify-between">
            <div className="py-1 w-44">
              <svg
                className="fill-current h-6 w-6 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
              <p className="font-bold">Cantidad de stock</p>
              <p className="text-sm">{productDetails.cantStock}</p>
            </div>
            <button className="shadow-sm border border-gray-500 rounded-md h-10" onClick={handleCloseAlert}>Cerrar </button>
          </div>
        </div>
      )}
        <div>
          <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">
          {productDetails.descripcion}
          </p>  
        </div>
        <div className="w-full max-w-md mx-auto mt-5">
          <div className="px-7 bg-white shadow-lg rounded-2xl">
            <div className="flex">
              <div className="flex-1 group">
                <button
                  onClick={() => handleDelete(productDetails.codProd)}
                  className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
                >
                  <span className="block px-1 pt-1 pb-1">
                    <i className="far fa-home text-2xl pt-1 mb-1 block" />
                    <span className="block text-xs pb-2">Eliminar</span>
                    <span className="block w-5 mx-auto h-1 group-hover:bg-red-500 rounded-full" />
                  </span>
                </button>
              </div>
              <div className="flex-1 group">
                <button
                  onClick={handleUpdate}
                  className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
                >
                  <span className="block px-1 pt-1 pb-1">
                    <i className="far fa-compass text-2xl pt-1 mb-1 block" />
                    <span className="block text-xs pb-2">Modificar</span>
                    <span className="block w-5 mx-auto h-1 group-hover:bg-lime-600 rounded-full" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default detailProduct;
