import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    { title: 'Proyecto 1', description: 'Una breve descripción del proyecto que explica su propósito y características principales.' },
    { title: 'Proyecto 2', description: 'Una breve descripción del proyecto que explica su propósito y características principales.' },
    { title: 'Proyecto 3', description: 'Una breve descripción del proyecto que explica su propósito y características principales.' },
    { title: 'Proyecto 4', description: 'Una breve descripción del proyecto que explica su propósito y características principales.' },
    { title: 'Proyecto 5', description: 'Una breve descripción del proyecto que explica su propósito y características principales.' },
    { title: 'Proyecto 6', description: 'Una breve descripción del proyecto que explica su propósito y características principales.' }
  ];

  return (
    <section className="p-5">
      <h2 className="ml-3 text-center text-textPrimary  font-extrabold text-3xl font-serif mb-4">Proyectos</h2>
      <div className="grid   grid-cols-2  sm:grid-cols-2 md:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            description={project.description} 
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
