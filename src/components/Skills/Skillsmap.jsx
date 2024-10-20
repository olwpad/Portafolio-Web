import React from 'react';
import 'animate.css';
import { API_URL } from '../../helpers/Urls';

export const Skillsmap = ({ skills }) => {
  console.log('skills:', skills);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:p-0 cursor-pointer">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="p-4 rounded-lg flex flex-col items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105 hover:animate__animated hover:animate__rubberBand"
        >
          <div className="text-4xl md:text-5xl mb-2">
            {console.log(`${API_URL.Images2}${skill.imageUrl}`)}
            <img
              src={`${API_URL.Images2}${skill.imageUrl}`}
              alt={skill.name}
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
          </div>
          <p className="text-base md:text-lg font-semibold">
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
