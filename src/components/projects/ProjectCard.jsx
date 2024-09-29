const ProjectCard = ({ title, description }) => (
  <div className="opacity-80 rounded-lg p-4 shadow-lg shadow-black flex flex-col items-center w-full max-w-xs transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <h3 className="md:text-xl md:font-bold mb-2 text-white">{title}</h3>
    <div className="relative overflow-hidden">
      <p className="transition-transform duration-300 transform group-hover:translate-y-[-10px] group-hover:opacity-75 text-white md:leading-relaxed md:max-w-full mb-4 md:text-base text-sm">
        {description}
      </p>
    </div>
    <a href="#" className="md:p-4 p-2 bg-textPrimary rounded-xl shadow-lg shadow-cyan-500/50 transform transition-transform duration-300 hover:scale-105">
      Ver más
    </a>
  </div>
);

export default ProjectCard;
