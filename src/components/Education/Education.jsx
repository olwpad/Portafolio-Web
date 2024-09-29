const Education = () => {
    const experiences = [
      {
        year: '2024',
        title: 'Tecnologo en Analisis y desarrollo de software',
        city: 'BOGOTA',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit aenean turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos et urna.'
      },
      {
        year: '2024',
        title: 'Tecnologo en Analisis y desarrollo de software',
        city: 'BOGOTA',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit aenean turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos et urna.'
      },    
    ];
  
    return (
      <div className="bg rounded-md text-white font-sans p-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Educación</h2>
          <div className="relative ml-10 pl-6">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            {experiences.map((experience, index) => (
              <div key={index} className="relative mb-10">
                <div className="absolute left-0 top-1 w-4 h-4 bg-textPrimary_transparent border-2 border-gray-300 rounded-full"></div>
                <div className="ml-6 bg-textPrimary p-4 rounded-lg shadow-lg">
                  <span className="text-sm text-gray-400">{experience.year}</span>
                  <h3 className="text-xl font-semiboldy">{experience.title}</h3>
                  <p className="text-md font-medium text-black">{experience.city}</p>
                  <p className="text-gray-400 mt-2">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Education;