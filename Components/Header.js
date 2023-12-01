'<use client>'
import React from "react";

const Header = () => {
  return (
    <div className="fixed-t w-full flex items-center justify-between h-20 text-black z-10  bg-blue-800 dark:bg-gray-800">
      <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
        <img
          className="w-14 h-14 md:w-14 md:h-14 mr-2 rounded-full overflow-hidden"
          src="https://media.licdn.com/dms/image/D4D03AQFXnf7PSVORQA/profile-displayphoto-shrink_200_200/0/1693490764387?e=1706745600&v=beta&t=9k1V4te9mrVyGb7Nz7mqjHjv-DFoos98wEUtRh-xJps"
        />
        <span className="hidden md:block text-white">ADMIN</span>
      </div>
      <div className="flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">
        <div className="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
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
            placeholder="Search"
            className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
          />
        </div>
        <ul className="flex items-center">
          
          <li>
            <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700" />
          </li>
          <li>
            <a href="#" className="flex items-center mr-4 text-white hover:text-black">
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
