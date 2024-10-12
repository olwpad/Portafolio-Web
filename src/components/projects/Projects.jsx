import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Barberías',
      description: 'Una aplicación web para gestionar citas en barberías, permitiendo a los usuarios reservar horarios y a los propietarios administrar sus agendas.'
    },
    {
      title: 'To Do',
      description: 'Un gestor de tareas que permite a los usuarios crear, editar y eliminar tareas, con la opción de clasificarlas por categorías y marcar las completadas.'
    },
    {
      title: 'Control de Gastos',
      description: 'Una herramienta para el seguimiento de gastos personales, donde los usuarios pueden registrar sus gastos y obtener informes sobre su presupuesto mensual.'
    },
    {
      title: 'Bar',
      description: 'Un sistema de gestión para bares y restaurantes que facilita el manejo de pedidos, inventario y cuentas de los clientes en tiempo real.'
    },
    {
      title: 'API de Clima',
      description: 'Una API que proporciona datos meteorológicos en tiempo real, permitiendo a los desarrolladores acceder a información sobre el clima en diversas ubicaciones.'
    },
    {
      title: 'API de Tareas',
      description: 'Una API RESTful que permite a los desarrolladores crear y gestionar tareas a través de solicitudes HTTP, facilitando la integración en diversas aplicaciones.'
    },
  ];

  return (
    <section className="p-5">
      <h2 className="ml-3 text-center text-3xl lg:text-4xl xl:text-4xl font-bold mb-4 lg:mb-6 xl:mb-8 text-blue-500 font-serif">Proyectos</h2>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 gap-5">
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
