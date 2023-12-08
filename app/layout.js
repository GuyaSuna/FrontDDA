import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer.js'
import Sidebar from '@/Components/Sidebar'
const inter =Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
    <Header />
    <div className="flex flex-col min-h-screen bg-blue-900 dark:bg-gray-900 text-gray-800 sm:flex-row w-full justify-center">
      <div className="sidebar transform transition-transform duration-150 ease-in md:shadow-md md:translate-x-0 bg-blue-900 dark:bg-gray-900 text-white sm:w-72 md:w-96">
        <Sidebar />
      </div>
      <div className="main sm:ml-0 md:ml-0 flex flex-grow flex-col p-4 transition-all duration-150 ease-in">
        <body className={inter.className}>
          <main>{children}</main>
        </body>
      </div>
    </div>
    <Footer />
  </>
  
  );
}
