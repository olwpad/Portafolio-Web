import ProjectCard from "./ProyectsCard";

const ProjectsList = ({ _id, title = 'Título no disponible', description = 'Descripción no disponible', url, fetchProjects, currentPage, setCurrentPage, }) => {
  return (
    <div className="max-h-96 overflow-y-auto p-4 space-y-4 flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
        <ProjectCard
          _id={_id}
          title={title}
          url={url}
          description={description}
          fetchProjects={fetchProjects}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ProjectsList;
