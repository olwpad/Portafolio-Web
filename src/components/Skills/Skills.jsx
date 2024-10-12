import { useState } from 'react';
import { Skillsmap } from './Skillsmap';
import { FaJava, FaReact, FaTools, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiSpring, SiExpress, SiPython, SiMongodb, SiMysql } from 'react-icons/si';
import { RiJavascriptLine } from "react-icons/ri";

export const ski = {
  Lenguajes: [
    { icon: <FaJava className="text-blue-600" />, name: 'Java', level: 'Intermedio' },
    { icon: <RiJavascriptLine className="text-yellow-500" />, name: 'Javascript', level: 'Intermedio' },
  ],
  Backend: [
    { icon: <SiSpring className="text-green-600" />, name: 'Spring Boot', level: 'Intermedio' },
    { icon: <SiExpress className="text-gray-700" />, name: 'Express', level: 'Intermedio' },
    { icon: <SiMongodb className="text-green-400" />, name: 'MongoDB', level: 'Intermedio' },
    { icon: <SiMysql className="text-blue-950" />, name: 'MySQL', level: 'Intermedio' },
  ],
  Frontend: [
    { icon: <FaReact className="text-blue-500" />, name: 'React', level: 'Intermedio' },
    { icon: <FaHtml5 className="text-orange-600" />, name: 'HTML', level: 'Intermedio' },
    { icon: <FaCss3Alt className="text-colorCSS" />, name: 'CSS', level: 'Intermedio' },
  ],
  Herramientas: [
    { icon: <FaTools className="text-gray-700" />, name: 'Postman', level: 'Intermedio' },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Lenguajes');

  const renderTabPanel = () => {
    switch (activeTab) {
      case 'Lenguajes':
        return <Skillsmap skills={ski.Lenguajes} />;
      case 'Backend':
        return <Skillsmap skills={ski.Backend} />;
      case 'Frontend':
        return <Skillsmap skills={ski.Frontend} />;
      case 'Herramientas':
        return <Skillsmap skills={ski.Herramientas} />;
      default:
        return null;
    }
  };

  return (
    <div className="skills-section flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8 xl:px-10">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 xl:mb-10 text-blue-500 font-serif">
        Habilidades
      </h2>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-wrap justify-center mb-4">
          {Object.keys(ski).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`m-2 p-2 sm:p-3 lg:p-4 text-base sm:text-lg lg:text-xl font-serif rounded-lg transition-transform duration-300 transform hover:scale-105 focus:outline-none 
                          ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} shadow-md hover:shadow-lg`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="w-full p-4 md:p-6 bg-white rounded-lg ">
          {renderTabPanel()}
        </div>
      </div>
    </div>
  );
};

export default Skills;
