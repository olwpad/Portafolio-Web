 import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../helpers/Urls';
const Education = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get(`${API_URL.EducationView1}`, {
        });
        console.log(response.data);
        setExperiences(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="bg rounded-md text-white font-sans p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl xl:text-4xl font-bold mb-4 lg:mb-6 xl:mb-8 text-blue-500 font-serif">Educación</h2>
        <div className="relative ml-10 pl-6">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          {experiences.map((experience, index) => (
            <div key={index} className="relative mb-10">
              <div className="absolute left-0 top-1 w-4 h-4 bg-textPrimary_transparent border-2 border-gray-300 rounded-full"></div>
              <div className="ml-6 p-4 rounded-lg shadow-lg">
                <h3 className="text-xl text-black  font-semiboldy ">{experience.title}</h3>
                <p className="text-md font-medium text-gray-400">{experience.city}</p>
                <span className="text-sm text-gray-400">{formatDate(experience.date)}</span>
                <p className="text-gray-400 mt-2 text-sm md:">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;