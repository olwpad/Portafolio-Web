import React from 'react';
import 'animate.css';

export const Skillsmap = ({ skills }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:p-0 cursor-pointer">
      {skills.map((skill, index) => (
        <div
          key={index} // Agrega una key para evitar advertencias en React
          className="p-4 rounded-lg flex flex-col items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105 hover:animate__animated hover:animate__rubberBand"
        >
          {/* Ajusta el tamaño del icono para que sea más grande */}
          <div className="text-4xl md:text-5xl mb-2">
            {skill.icon}
          </div>
          <p className="text-base md:text-lg text-white font-semibold">
            {skill.name}
          </p>
          <p className="text-sm md:text-base text-gray-300">
            {skill.level}
          </p>
        </div>
      ))}
    </div>
  );
};
