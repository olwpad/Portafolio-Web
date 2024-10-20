import React, { useState, useEffect } from 'react';
import Skill from '../../helpers/send';
import { API_URL } from '../../helpers/Urls';
import SkillList from './SkillList';
import Pagination from '../Pagination';
import axios from 'axios';

export const SkillsAdmin = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    level: '',
    category: '',
    image: null,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, level, category, image } = formData;

    const formDataToSend = new FormData();
    formDataToSend.append('name', name);
    formDataToSend.append('level', level); 
    formDataToSend.append('category', category); 
    console.log('formDataToSend:', formDataToSend);
    if (image) {
      formDataToSend.append('image', image);
    } else {
      console.warn('No image file selected');
    }

    // Verifica el contenido del FormData
    for (let pair of formDataToSend.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      console.log('formDataToSend:', formDataToSend);
      await Skill(formDataToSend, API_URL.Skills);
      setFormData({ name: '', level: '', category: '', image: null });
      fetchSkills();
    } catch (err) {
      console.error('Error al agregar habilidad:', err);
    }
  };

  const fetchSkills = async (page = currentPage) => {
    const token = localStorage.getItem('token');
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL.SkillsAdmin}?page=${page}&limit=1`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSkills(response.data.skillResp);
      setTotalPages(response.data.totalPages);
      setCurrentPage(response.data.page);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div className="flex justify-center">
      <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 pr-4 pl-4 m-10 max-w-5xl mx-auto">
        {/* Formulario de Habilidades */}
        <div className="w-full max-w-md">
          <h2 className="text-center font-serif text-colorCSS">Agregar Nueva Habilidad</h2>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
              <input
                id="name"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="level" className="block text-gray-700 text-sm font-bold mb-2">Nivel</label>
              <select
                id="level"
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Selecciona un nivel</option>
                <option value="Principiante">Principiante</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Categoría</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Selecciona una categoría</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Herramientas">Herramientas</option>
                <option value="Lenguajes">Lenguajes</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Imagen</label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Guardar
            </button>
          </form>
        </div>

        {/* Lista de Habilidades */}
        <div className="p-6 rounded-lg shadow-md">
          <h2 className="font-serif text-colorCSS text-center">Tus Habilidades</h2>
          <span className="block border-b border-[#42A5F5] my-4" />
          <ul>
            {loading ? (
              <li>Cargando habilidades...</li>
            ) : error ? (
              <li>Error: {error}</li>
            ) : (
              skills.map((skill, index) => (
                <SkillList
                  key={index}
                  {...skill}
                  fetchSkills={fetchSkills}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              ))
            )}
          </ul>
          {/* Paginación */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => {
              setCurrentPage(page);
              fetchSkills(page);
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default SkillsAdmin;
