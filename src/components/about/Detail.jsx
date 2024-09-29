import React from 'react'

export const Detail = () => {
  return (
    <div className="text-primary flex justify-center flex-col  md:items-end col-span-1 md:pt-20 pl-10">
      <div className="flex flex-col items-center md:items-start md:mt-10">
        <div className="pb-2 flex justify-start">
          <h1 className="font-semibold text-textPrimary text-2xl animate-fadeInFromRight animate__delay-0s">
            Hola, mi nombre es;
          </h1>
        </div>
        <div className="pb-4 md:pl-10">
          <h2 className="font-extrabold text-2xl md:text-3xl  text-accentHover animate-fadeInFromRight animate__delay-1s">
            Luis Ortiz
          </h2>
        </div>
        <div className="mb-2 flex justify-end">
          <p className="lg:text-lg  md:px-10 text-textSecondary max-w-2xl animate-fadeInFromRight animate__delay-1s ">
            Soy un Desarrollador Web apasionado por crear aplicaciones web dinámicas y funcionales. Tengo experiencia en el desarrollo de sitios web responsivos utilizando tecnologías modernas como React, Tailwind CSS, y Spring Boot. Me encanta resolver problemas complejos y transformar ideas en soluciones digitales efectivas.
          </p>
        </div> 
      </div>
      <div className="p-2 mb-2 flex  justify-start">
        <button className='md:p-4 p-2  bg-textPrimary rounded-xl shadow-lg shadow-cyan-500/50 transform transform-transition  duration-300 hover:scale-105'>Download cv</button>
      </div> 
    </div> 
  )
}
