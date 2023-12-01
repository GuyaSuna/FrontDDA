// loginPage.js

import React from "react";

function LoginPage() {
  return (
    <main className="h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;
