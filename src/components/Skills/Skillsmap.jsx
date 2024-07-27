
export const Skillsmap = ({skills}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  md:p-0 p-10  ">
    {skills.map((skill, index) => (
      <div key={index} className="skill-card md:p-4 p-2 lg:px-7    transform transition-transform duration-300 hover:scale-105 hover:shadow-xl  bg-textPrimary_transparent borde rounded-lg shadow-sm flex flex-col items-center shadow-blue-500/50">
        <div className="md:text-3xl mb-2">{skill.icon}</div>
        <h4 className="md:text-lg font-medium mb-1 font-serif">{skill.name}</h4>
        <p className="md:text-sm text-primary-600  font-serif">{skill.level}</p>
      </div>
    ))}
  </div>
  )
}
