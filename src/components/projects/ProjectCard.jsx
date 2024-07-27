const ProjectCard = ({ title, description }) => (
  <div className="bg-emerald-900 opacity-80 rounded-lg p-4 shadow-lg flex flex-col items-center w-full max-w-xs transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <h3 className="md:text-xl md:font-extrabold mb-2 text-accentHover">{title}</h3>
    <p className="hidden md:block text-white md:leading-relaxed md:max-w-full mb-4 md:text-xl text-sm">{description}</p>
    <a href="#" className="bg-textPrimary_transparent text-white md:px-4 px-3 md:py-2 rounded hover:bg-blue-600">
      Ver más
    </a>
  </div>
);

export default ProjectCard;
