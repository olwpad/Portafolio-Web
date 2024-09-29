import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';

export const Detail2 = () => {
  return (
    <div className="md:fixed top-1/2 transform -translate-y-1/2 left-4 flex flex-col items-center md:items-start md:pl-4  mt-6">
      <div className="relative flex flex-row md:flex-col items-center md:items-start">
        <div className="w-full md:w-auto md:h-full "></div>
        <ul className="flex flex-row md:flex-col items-center space-x-4 md:space-x-0 md:space-y-8 mt-4 md:mt-0">
          <li className="relative z-10 bg-background p-2 rounded-full shadow-lg">
            <a href="https://github.com/olwpad" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-2xl text-textPrimary hover:text-accentHover transition-colors  transform md:transition-transform duration-300 hover:scale-105" />
            </a>
          </li>
          <li className="relative z-10 bg-background p-2 rounded-full shadow-lg">
            <a href="https://www.linkedin.com/in/luis-ortiz-8346ba23a/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-textPrimary hover:text-accentHover transition-colors transform md:transition-transform duration-300 hover:scale-105" />
            </a>
          </li>
          <li className="relative z-10 bg-background p-2 rounded-full shadow-lg">
            <a href="mailto:tuemail@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGoogle} className="text-2xl text-textPrimary hover:text-accentHover transition-colors transform md:transition-transform duration-300 hover:scale-105" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};