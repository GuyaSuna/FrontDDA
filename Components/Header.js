import React from "react";

const Header = () => {
  return (
    <div className="fixed-t w-full flex items-center justify-between h-20 text-black z-10  bg-blue-800 dark:bg-gray-800 border-b-4  dark:border-gray-600">
      <div className="flex items-center justify-between md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
        <button class="relative flex flex-col items-center group focus:outline-none text-white hover:bg-gray-400">
          <div class="flex items-center h-16">
            Opciones
            <svg
              class="w-4 h-4 mt-px ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="absolute top-0 hidden w-screen max-w-3xl mt-16 bg-white border border-black shadow-lg group-focus:visible">
            <div class="grid grid-cols-2 gap-10 p-8">
              <a class="flex" href="#">
                <span class="flex-shrink-0 w-12 h-12 bg-gray-300"></span>
                <div class="flex flex-col ml-4">
                  <span class="text-left font-medium leading-none">
                    Heading
                  </span>
                  <span class="text-left mt-1 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
              </a>
              <a class="flex" href="#">
                <span class="flex-shrink-0 w-12 h-12 bg-gray-300"></span>
                <div class="flex flex-col ml-4">
                  <span class="text-left font-medium leading-none">
                    Heading
                  </span>
                  <span class="text-left mt-1 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
              </a>
              <a class="flex" href="#">
                <span class="flex-shrink-0 w-12 h-12 bg-gray-300"></span>
                <div class="flex flex-col ml-4">
                  <span class="text-left font-medium leading-none">
                    Heading
                  </span>
                  <span class="text-left mt-1 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
              </a>
              <a class="flex" href="#">
                <span class="flex-shrink-0 w-12 h-12 bg-gray-300"></span>
                <div class="flex flex-col ml-4">
                  <span class="text-left font-medium leading-none">
                    Heading
                  </span>
                  <span class="text-left mt-1 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
              </a>
            </div>
            <div
              class="flex items-center justify-between col-span-2 px-8 py-4 border-t border-black"
              href="#"
            >
              <div class="flex flex-col">
                <span class="text-left font-medium leading-none">Heading</span>
                <span class="text-left mt-1 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </div>
              <a href="#" class="flex items-center h-10 px-3 bg-gray-200 ">
                Button
              </a>
            </div>
          </div>
        </button>
      </div>
      <div className="flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">
        <div className="bg-white rounded flex items-center w-full max-w-xs m-12 p-2 shadow-sm border border-gray-200">
          <button className="outline-none focus:outline-none">
            <svg
              className="w-5 text-gray-600 h-5 cursor-pointer"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <input
            type="search"
            name
            id
            placeholder="Buscar"
            className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
          />
        </div>
        <ul className="flex items-center">
          <li>
            <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700" />
          </li>
          <li>
            <a
              href="#"
              className="flex items-center mr-4 text-white hover:text-black"
            >
              <span className="inline-flex mr-1">
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
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </span>
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
