import SkillCard from "./SkillsCard"; // Asegúrate de que este componente maneje las habilidades

const SkillsList = ({ _id, title = 'Título no disponible', level = 'Nivel no disponible', category = 'Categoría no disponible', imageUrl, fetchSkills, currentPage, setCurrentPage,name }) => {
  return (
    <div className="max-h-96 overflow-y-auto p-4 space-y-4 flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
        <SkillCard
          _id={_id}
          title={title}
          level={level}
          img={imageUrl}
          category={category}
          fetchSkills={fetchSkills}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          name={name}
        />
      </div>
    </div>
  );
};

export default SkillsList;
