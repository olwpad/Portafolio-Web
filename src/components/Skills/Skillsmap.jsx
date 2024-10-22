import React from 'react';
import 'animate.css';
import { API_URL } from '../../helpers/Urls';

export const Skillsmap = ({ skills }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-6 md:p-0 cursor-pointer">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 rounded-lg flex flex-col items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105 hover:animate__animated hover:animate__rubberBand px-10"
          >
            <div className="text-4xl md:text-5xl mb-2">
              <img
                src={`${API_URL.Images2}${skill.imageUrl}`}
                alt={skill.name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
            <p className="text-base md:text-lg font-semibold">{skill.name}</p>
            <p className="text-sm md:text-base text-gray-300">{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
