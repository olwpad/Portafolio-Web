import React, { useState, useEffect } from 'react';
import Education from '../../helpers/send';
import { API_URL } from '../../helpers/Urls';
import axios from 'axios';
import EducationList from './Educationlist';
import Pagination from '../Pagination';

export const EducationAdmin = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    city: '',
    description: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Education(formData, API_URL.Education)
      setFormData({ title: '', date: '', city: '', description: '' });
      fetchExperiences();
    } catch (err) {
      console.error('Error al agregar experiencia:', err);
    }
  };

  const fetchExperiences = async (page = currentPage) => {
    const token = localStorage.getItem('token');
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL.EducationView2}?page=${page}&limit=1`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setExperiences(response.data.experiences);
      setTotalPages(response.data.totalPages);
      setCurrentPage(response.data.page);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  return (
    <div className="flex justify-center">
      <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 pr-4 pl-4 m-10 max-w-5xl mx-auto">
        {/* Formulario de Educación */}
        <div className="w-full max-w-md">
          <h2 className="text-center font-serif text-colorCSS">Agregar Nueva Educación</h2>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full">
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Título</label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Título"
                value={formData.title}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Fecha</label>
              <input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">Ciudad</label>
              <input
                id="city"
                name="city"
                type="text"
                placeholder="Ciudad"
                value={formData.city}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Descripción</label>
              <textarea
                id="description"
                name="description"
                placeholder="Descripción"
                value={formData.description}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
              Guardar
            </button>
          </form>
        </div>

        {/* Lista de Experiencias */}
        <div className="p-6 rounded-lg shadow-md">
          <h2 className="font-serif text-colorCSS text-center">Tu Educación</h2>
          <span className="block border-b border-[#42A5F5] my-4" />
          <ul>
            {loading ? (
              <li>Cargando experiencias...</li>
            ) : error ? (
              <li>Error: {error}</li>
            ) : (
              experiences.map((experience, index) => (
                <EducationList key={index} {...experience} fetchExperiences={fetchExperiences} currentPage={currentPage}  setCurrentPage={setCurrentPage} />
              ))
            )}
          </ul>

          {/* Paginación */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => {
              setCurrentPage(page);
              fetchExperiences(page);
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default EducationAdmin;
