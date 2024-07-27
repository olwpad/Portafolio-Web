import React from 'react'

export const Detail = () => {
  return (
    <div className="text-primary flex justify-center flex-col col-span-1 md:pt-20">
    <div className="flex flex-col items-start md:items-center">
      <div className="pb-2 flex justify-start">
        <h1 className="font-semibold text-textPrimary text-xl animate-fadeInFromRight animate__delay-0s">
          Hola, mi nombre es;
        </h1>
      </div>
      <div className="pb-4 flex justify-start">
        <h2 className="font-extrabold text-3xl text-accentHover animate-fadeInFromRight animate__delay-1s">
          Luis Ortiz
        </h2>
      </div>
    </div>

    <div className="p-2 mb-2 flex justify-end">
      <p className="text-base leading-relaxed text-textSecondary max-w-xl">
        Soy un Desarrollador Web apasionado por crear aplicaciones web dinámicas y funcionales. Tengo experiencia en el desarrollo de sitios web responsivos utilizando tecnologías modernas como React, Tailwind CSS, y Spring Boot. Me encanta resolver problemas complejos y transformar ideas en soluciones digitales efectivas.
      </p>
    </div> 
    
    <div className="p-2 mb-2 flex  justify-center">
      <button className='md:p-4 p-2 bg-textPrimary rounded-xl'>Download cv</button>
    </div> 
  </div> 
  )
}
