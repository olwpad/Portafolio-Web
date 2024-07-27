import { Skillsmap } from './Skillsmap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaJava, FaReact, FaTools, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiSpring, SiExpress, SiPython, SiMongodb, SiMysql } from 'react-icons/si';
import { RiJavascriptLine } from "react-icons/ri";

export const ski = {
    Lenguajes: [
      { icon: <FaJava />, name: 'Java', level: 'Fundamentos' },
      { icon: <SiPython />, name: 'Python', level: 'Fundamentos' },
      { icon: <RiJavascriptLine />, name: 'Javascript', level: 'Fundamentos' },
    ],
    Backend: [
      { icon: <SiSpring />, name: 'Spring Boot', level: 'Fundamentos' },
      { icon: <SiExpress />, name: 'Express', level: 'Fundamentos' },
      { icon: <SiMongodb />, name: 'MongoDB', level: 'Fundamentos' },
      { icon: <SiMysql />, name: 'MySQL', level: 'Fundamentos' },
    ],
    Frontend: [
      { icon: <FaReact />, name: 'React', level: 'Fundamentos' },
      { icon: <FaHtml5 />, name: 'HTML', level: 'Fundamentos' },
      { icon: <FaCss3Alt />, name: 'CSS', level: 'Fundamentos' },
    ],
    Herramientas: [
      { icon: <FaTools />, name: 'Postman', level: 'Fundamentos' },
    ],
  };

  export const Skills = () => {
    return (
      <div className="skills-section flex flex-col items-center">
        <h2 className="text-3xl lg:text-4xl xl:text-4xl font-bold mb-4 lg:mb-6 xl:mb-8 text-textPrimary font-serif">
          Habilidades
        </h2>
        <Tabs className="flex flex-col items-center">
          <TabList className="flex space-x-4 lg:space-x-6 xl:space-x-8 mb-4 lg:mb-6 xl:mb-8 cursor-pointer">
            <Tab className="p-2 lg:p-3 xl:p-4 text-base lg:text-lg xl:text-xl bg-textPrimary font-serif text-white rounded   transform transition-transform duration-300 hover:-translate-y-2">
              Lenguajes
            </Tab>
            <Tab className="p-2 lg:p-3 xl:p-4  text-base lg:text-lg xl:text-xl bg-textPrimary font-serif text-white rounded  transform transition-transform duration-300 hover:-translate-y-2">
              Backend
            </Tab>
            <Tab className="p-2 lg:p-3 xl:p-4 text-base lg:text-lg xl:text-xl bg-textPrimary font-serif text-white rounded   transform transition-transform duration-300 hover:-translate-y-2">
              Frontend
            </Tab>
            <Tab className="p-2 lg:p-3 xl:p-4 text-base lg:text-lg xl:text-xl bg-textPrimary font-serif text-white rounded  transform transition-transform duration-300 hover:-translate-y-2">
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
  