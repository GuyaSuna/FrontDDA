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
              className="mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
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
              className="mt-1 p-2 w-full border-b-2 border-green-500 focus:outline-none focus:border-green-700"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Iniciar Sesión
          </button>

          <button
            type="submit"
            className="bg-blue-500 ml-10 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Registrarse
          </button>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;
