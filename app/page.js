"use client";
import { useRouter } from "next/navigation";
import RootLayout from "./layout";

import Link from "next/link";

function Home() {
  const links = [
    {
      label: "LogIn",
      route: "./LogIn",
    },
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
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Gestion de Supermercado</h1>
      </div>
      <div>
        {links.map(({ label, route }) => (
          <li key={route}>
            <Link href={route}>{label}</Link>
          </li>
        ))}
      </div>
    </main>
  );
}

export default Home;
