import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/Context/context";
const HeaderAdmin = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeSession = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  };
  const Back = () => {
    navigate('/home');
  }


  return (
    <nav className="bg-white border-gray-200 dark:bg-blue-500 fixed top-0 left-0 w-full shadow-sm z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <a
          href="#logo"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ml-4 md:ml-0">
          Modulo Admin
          </span>
        </a>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-white dark:hover:bg-blue-600 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-blue-500 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  md:bg-white dark:bg-gray-600 md:dark:bg-blue-500 dark:border-gray-700 md:justify-end">
          <li>
            <button className="block py-2 px-3 text-white rounded transition-all duration-300 ease-in-out transform hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-blue-500 dark:hover:text-white md:dark:hover:bg-transparent hover:scale-105"
             onClick={()=>Back()}
        >
          Volver A Pagina Principal
        </button>
            </li>
           
            <li>
            <button
             className="block py-2 px-3 text-white rounded transition-all duration-300 ease-in-out transform hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-blue-500 dark:hover:text-white md:dark:hover:bg-transparent hover:scale-105"
             onClick={closeSession}
        >
          Cerrar Sesión
        </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderAdmin;
