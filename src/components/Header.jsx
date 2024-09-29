import React, { useState } from 'react';

 const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="mt-4 text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="#logo" className="text-primary font-serif text-xl">Olwpad</a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-primary focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <nav className={`md:flex md:space-x-4 ${isOpen ?'block space-x-6 pl-10  ':'hidden'} absolute md:static top-16 left-0 w-full md:w-auto md:bg-transparent  md:mt-0 mt-5`}>
          <a href="#home" className="block md:inline animate__animated animate__fadeInDown text-primary custom-underline font-serif hover:text-primaryHover">Home</a>
          <a href="#Sobre-mi" className="block md:inline animate__animated animate__fadeInDown text-primary custom-underline font-serif hover:text-accentHover">Sobre mi</a>
          <a href="#habilidades" className="block md:inline animate__animated animate__fadeInDown text-primary custom-underline font-serif hover:text-accentHover">Habilidades</a>
          <a href="#proyectos" className="block md:inline animate__animated animate__fadeInDown text-primary custom-underline font-serif hover:text-accentHover">Proyectos</a>
          <a href="#Educacion" className="block md:inline animate__animated animate__fadeInDown text-primary custom-underline font-serif hover:text-accentHover">Educación</a>
          <a href="#contacto" className="block md:inline animate__animated animate__fadeInDown text-primary custom-underline font-serif hover:text-accentHover">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;