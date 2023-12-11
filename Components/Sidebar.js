import React from "react";
import Link from "next/link";

const Sidebar = () => {
  const links = [
    {
      label: "Clientes",
      route: "./Clientes",
    },
    {
      label: "Productos",
      route: "./Productos",
    },
    {
      label: "Home",
      route: "/",
    },
    {
      label: "AllProducts",
      route: "./AllProducts",
    },
  ];

  return (
    <div className="flex flex-col h-full p-3 w-72 dark:bg-gray-900 dark:text-gray-100 justify-between">
      <ul className="flex flex-col space-y-1 w-full md:w-full">
        <li className="mb-10">
          <div className="flex items-center  justify-center md:justify-center md:w-full   bg-blue-900 dark:bg-gray-900 border-none">
            <img
              className="w-14 h-14 md:w-24 md:h-24 mr-2 rounded-full overflow-hidden mt-10"
              src="https://media.licdn.com/dms/image/D4D03AQFXnf7PSVORQA/profile-displayphoto-shrink_200_200/0/1693490764387?e=1706745600&v=beta&t=9k1V4te9mrVyGb7Nz7mqjHjv-DFoos98wEUtRh-xJps"
            />
            <span className="hidden md:block text-white">ADMIN</span>
          </div>
        </li>
        <li className="px-5 hidden md:block">
          <div className="flex flex-row items-center h-8">
            <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
              Menu
            </div>
          </div>
        </li>
        <li>
          <a
            href="#"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Inicio</span>
          </a>
        </li>
        <li>
          <Link
            href="/Clientes"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              Alta Clientes
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/Venta"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Ventas</span>
          </Link>
        </li>
        <li>
          <Link
            href="/Productos"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              Productos
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/Vendedor"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <svg
                className="w-5 h-5 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              Vendedores
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
