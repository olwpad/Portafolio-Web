import React from 'react';

export const Detail = () => {
  return (
    <div className="text-primary flex justify-center flex-col md:items-end col-span-1 md:pt-20  lg:pl-20  lg:mb-10  ">
      <div className="flex flex-col items-center md:items-start">
        <div className="pb-2 flex justify-start">
          <h1 className="font-semibold text-textPrimary text-2xl animate-fadeInFromRight animate__delay-0s lg:ml-8 mr-20 md:ml-3">
            ¡Hola! soy:
          </h1>
        </div>
        <div className="pb-4 md:pl-10">
          <h2 className="font-extrabold text-2xl md:text-3xl text-blue-500 animate-fadeInFromRight animate__delay-1s">
            Luis Ortiz
          </h2>
        </div>
        <div className="mb-2 flex justify-end">
          <p className="lg:text-lg text-sm md:px-10 text-textSecondary max-w-2xl animate-fadeInFromRight animate__delay-1s lg:ml-10 ml-4">
             Desarrollador Web con una sólida pasión por crear aplicaciones web dinámicas y funcionales. Poseo experiencia en el desarrollo de sitios web responsivos, utilizando tecnologías modernas como React, Tailwind CSS y Spring Boot. Me enfoco en resolver problemas complejos y transformar ideas en soluciones digitales efectivas, siempre con el objetivo de mejorar la experiencia del usuario.
          </p>
        </div>
      </div>
      <div className="p-2 mb-2 flex justify-start">
        <button className='md:p-4 p-2 bg-blue-500 text-white rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105'>
          Descargar CV
        </button>
      </div>
    </div>
  );
};
