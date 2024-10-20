import { useState } from 'react';
import SkillsAdmin from './skills/SkillsAdmin';
import { ProjectsAdmin } from './proyects/ProjectsAdmin';
import { EducationAdmin } from './educations/EducationAdmin';
import HeaderAdmin from './HeaderAdmin';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('Skills');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Encabezado */}
      <HeaderAdmin />

      {/* Contenedor principal con flexbox */}
      <div className="flex flex-grow">
        {/* Contenedor lateral */}
        <nav className="w-1/4 bg-gray-200 p-4 flex-shrink-0">
          <h2 className="text-xl font-semibold mb-4">Menú</h2>
          <ul>
            <li>
              <button
                className={`block w-full text-left py-2 ${
                  activeSection === 'projects' ? 'bg-gray-300' : ''
                }`}
                onClick={() => handleSectionChange('projects')}
              >
                Proyectos
              </button>
            </li>
            <li>
              <button
                className={`block w-full text-left py-2 ${
                  activeSection === 'Education' ? 'bg-gray-300' : ''
                }`}
                onClick={() => handleSectionChange('Education')}
              >
                Educación
              </button>
            </li>
            <li>
              <button
                className={`block w-full text-left py-2 ${
                  activeSection === 'skills' ? 'bg-gray-300' : ''
                }`}
                onClick={() => handleSectionChange('skills')}
              >
                Habilidades
              </button>
            </li>
          </ul>
        </nav>

        {/* Contenido principal */}
        <div className="flex-grow p-8 overflow-y-auto flex justify-center">
  
          {activeSection === 'skills' && (
            <div className="flex justify-center items-center">
          <SkillsAdmin />
            </div>
          )}
          {activeSection === 'projects' && (
            <div className="flex justify-center items-center">
              <ProjectsAdmin />
            </div>
          )}
          {activeSection === 'Education' && (
            <div className="flex justify-center items-center">
              <EducationAdmin />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
