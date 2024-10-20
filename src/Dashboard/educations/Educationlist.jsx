import EducationCard from "./EducationCard";

const EducationList = ({ _id,  title = 'Título no disponible',  date = 'Fecha no disponible',  city = 'Ciudad no disponible',  description = 'Descripción no disponible',  fetchExperiences ,currentPage,setCurrentPage

}) => {
  return (
    <div className="max-h-96 overflow-y-auto p-4 space-y-4 flex justify center">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
        <EducationCard
          _id={_id}
          title={title}
          date={date}
          city={city}
          description={description}
          fetchExperiences={fetchExperiences}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default EducationList;
