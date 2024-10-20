import { useEffect } from 'react';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import axios from 'axios';
import { API_URL } from '../../helpers/Urls';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_URL.Projects}`, {
        });
        console.log(response.data);
        setProjects(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="p-5">
      <h2 className="ml-3 text-center text-3xl lg:text-4xl xl:text-4xl font-bold mb-4 lg:mb-6 xl:mb-8 text-blue-500 font-serif">Proyectos</h2>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title} 
            description={project.description} 
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
