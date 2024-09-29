import { Skillsmap } from './Skillsmap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
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
    { icon: <SiExpress className="text.gray-700" />, name: 'Express', level: 'Intermedio' },
    { icon: <SiMongodb className="text-green-400" />, name: 'MongoDB', level: 'Intermedio' },
    { icon: <SiMysql className="text-blue-950" />, name: 'MySQL', level: 'Intermedio' },
  ],
  Frontend: [
    { icon: <FaReact className="text-blue-500" />, name: 'React', level: 'Intemerdio' },
    { icon: <FaHtml5 className="text-orange-600" />, name: 'HTML', level: 'Intermedio' },
    { icon: <FaCss3Alt className="text-colorCSS" />, name: 'CSS', level: 'Intermedio' },
  ],
  Herramientas: [
    { icon: <FaTools className="text-gray-700" />, name: 'Postman', level: 'Intermedio' },
  ],
};


 const Skills = () => {
    return (
      <div className="skills-section flex flex-col items-center">
        <h2 className="text-3xl lg:text-4xl xl:text-4xl font-bold mb-4 lg:mb-6 xl:mb-8 text-textPrimary font-serif">
          Habilidades
        </h2>
        <Tabs className="flex flex-col items-center mx-5">
          <TabList className="flex space-x-4 lg:space-x-6 xl:space-x-8 mb-4 lg:mb-6 xl:mb-8 cursor-pointer">
          <Tab className="p-2 lg:p-3 xl:p-5 text-base lg:text-lg xl:text-xl bg-textPrimary font-serif text-white rounded transform transform-transition duration-300 hover:scale-105 focus:outline-none focus:ring-0 active:outline-none">
            Lenguajes
          </Tab>
          <Tab className="p-2 lg:p-3 xl:p-5 text-base lg:text-lg xl:text-xl bg-textPrimary font-serif text-white rounded transform transform-transition duration-300 hover:scale-105 focus:outline-none focus:ring-0 active:outline-none">
            Backend
          </Tab>
          <Tab className="p-2 lg:p-3 xl:p-5 text-base lg:text-lg xl:text-xl bg-textPrimary font-serif text-white rounded transform transform-transition duration-300 hover:scale-105 focus:outline-none focus:ring-0 active:outline-none">
            Frontend
          </Tab>
          <Tab className="p-2 lg:p-3 xl:p-5 text-base lg:text-lg xl:text-xl bg-textPrimary font-serif text-white rounded transform transform-transition duration-300 hover:scale-105 focus:outline-none focus:ring-0 active:outline-none">
            Herramientas
          </Tab>

          </TabList>

          <TabPanel>
            <Skillsmap skills={ski.Lenguajes} />
          </TabPanel>
          <TabPanel>
            <Skillsmap skills={ski.Backend} />
          </TabPanel>
          <TabPanel>
            <Skillsmap skills={ski.Frontend} />
          </TabPanel>
          <TabPanel>
            <Skillsmap skills={ski.Herramientas} />
          </TabPanel>
        </Tabs>
      </div>
    );
  };
  
  export default Skills;