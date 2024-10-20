import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../helpers/Urls';
import { Skillsmap } from './Skillsmap';

const Skills = () => {
  const [skills, setSkills] = useState([]); // Estado para las habilidades
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores
  const [activeTab, setActiveTab] = useState('Herramientas'); // Estado para la pestaña activa

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get(`${API_URL.Skills}`);
        // Agrupar habilidades por categoría
        const skillsData = response.data.reduce((acc, skill) => {
          if (!acc[skill.category]) {
            acc[skill.category] = { category: skill.category, items: [] };
          }
          acc[skill.category].items.push({
            id: skill._id,
            name: skill.name,
            level: skill.level,
            imageUrl: skill.imageUrlPublic,
          });
          return acc;
        }, {});

        // Convertir el objeto en un array
        setSkills(Object.values(skillsData));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  // Función para renderizar el panel de pestañas
  const renderTabPanel = () => {
    const filteredSkills = skills.find(skill => skill.category === activeTab)?.items || [];

    if (filteredSkills.length === 0) {
      return <div>No hay habilidades disponibles en esta categoría.</div>;
    }

    return <Skillsmap skills={filteredSkills} />;
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="skills-section flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8 xl:px-10">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 xl:mb-10 text-blue-500 font-serif">
        Habilidades
      </h2>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-wrap justify-center mb-4">
          {skills.map(skill => (
            <button
              key={skill.category}
              onClick={() => setActiveTab(skill.category)} // Cambiar pestaña
              className={`m-2 p-2 sm:p-3 lg:p-4 text-base sm:text-lg lg:text-xl font-serif rounded-lg transition-transform duration-300 transform hover:scale-105 focus:outline-none 
                          ${activeTab === skill.category ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} shadow-md hover:shadow-lg`}
            >
              {skill.category}
            </button>
          ))}
        </div>
        <div className="w-full p-4 md:p-6 bg-white rounded-lg h-64 md:h-auto">
          {renderTabPanel()}
        </div>
      </div>
    </div>
  );
};

export default Skills;
