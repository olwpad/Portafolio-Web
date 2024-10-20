const ProjectCard = ({ title, description,url }) => (
  <div className="opacity-80 rounded-lg p-4 shadow-lg flex flex-col items-center w-full max-w-xs transform transition-transform duration-300 hover:scale-105  ">
    <h3 className="md:text-xl md:font-semi-bold mb-2">{title}</h3>
    <div className="relative overflow-hidden">
      <p className="transition-transform duration-300   text-textSecondary transform group-hover:translate-y-[-10px] group-hover:opacity-75 md:leading-relaxed md:max-w-full mb-4 md:text-base text-sm">
        {description}
      </p>
    </div>
    <a href={url} className="md:p-4 p-2 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 text-title" target="blank">
    ver más
    </a>
  </div>
);

export default ProjectCard;
