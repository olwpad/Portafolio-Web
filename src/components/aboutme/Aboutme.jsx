import React from 'react';
import myImage from '../../../public/personaje-desarrollador.avif';

const AboutMe = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center p-6">
      <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-6">
        <img 
          src={myImage} 
          alt="Sobre mí" 
          className="rounded-full w-48 h-48 object-cover"
        />
      </div>
      <div className="flex flex-col items-center sm:items-start">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-blue-500 font-serif">
          Sobre mí
        </h2>
        <div className="leading-relaxed text-textSecondary max-w-xl p-4">
          <p className="md:text-lg md:px-0 px-5 mb-4 text-sm">
            Soy un Desarrollador Web apasionado, siempre en búsqueda de nuevos desafíos y tecnologías que me permitan crear soluciones innovadoras y efectivas para problemas complejos.
          </p>
          <p className="md:text-lg md:px-0 px-5 text-sm">
            En mis momentos libres, disfruto de la lectura sobre avances tecnológicos y el desarrollo de proyectos personales que me permiten seguir aprendiendo y creciendo en este apasionante ámbito.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
