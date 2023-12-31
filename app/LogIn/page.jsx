"use client";
import React, { useState } from 'react';
import { logIn } from '../../Api/api';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useUsuario } from '../../Context/userContext';

function LoginPage() {
  const router = useRouter();
  const { iniciarSesion } = useUsuario();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = async (e) => {
    e.preventDefault();

    try {
      const datosUsuario = await logIn(name, password);

      if (datosUsuario) {
        iniciarSesion(datosUsuario);
        router.push('/');
      } else {
        console.log('Inicio de sesión fallido');
      }
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <main
    className="h-screen flex items-center justify-center bg-cover"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9uZG8lMjBkZWwlMjBzaXRpbyUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D')",
      backgroundSize: "cover", // Agregado para evitar estirar la imagen
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
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
              value={name}
              onChange={handleNameChange}
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
              value={password}
              onChange={handlePasswordChange}
              className="mt-1 p-2 w-full border-b-2 border-green-500 focus:outline-none focus:border-green-700"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            onClick={handleLogIn}
          >
            Iniciar Sesión
          </button>

          <Link
            type="button"
            className="bg-blue-500 ml-10 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            href="VendedorRegister"
          >
            Registrarse
          </Link>

          <Link
            type="button"
            className="bg-blue-500 ml-10 text-white py-2 px-4 mt-5 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            href="/"
          >
            Volver
          </Link>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;
