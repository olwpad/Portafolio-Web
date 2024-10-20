import React, { useState, useEffect } from 'react';
import Project from '../../helpers/send';
import { API_URL } from '../../helpers/Urls';
import ProjectList from './ProjectsList';
import Pagination from '../Pagination';
import axios from 'axios';

export const ProjectsAdmin = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginationLoading, setPaginationLoading] = useState(false); // Estado de carga para paginación
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    url: '', // Asegúrate de incluir el campo URL en el estado
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('formData:', formData);
    try {
      await Project(formData, API_URL.Projects);
      setFormData({ title: '', description: '', url: '' }); // Reinicia todos los campos
      fetchProjects();
    } catch (err) {
      console.error('Error al agregar proyecto:', err);
    }
  };

  const fetchProjects = async (page = currentPage) => {
    const token = localStorage.getItem('token');
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL.ProjectsAdmin}?page=${page}&limit=1`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects(response.data.projects);
      setTotalPages(response.data.totalPages);
      setCurrentPage(response.data.page);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = async (page) => {
    setCurrentPage(page);
    setPaginationLoading(true); // Inicia el estado de carga al cambiar de página
    await fetchProjects(page);
    setPaginationLoading(false); // Termina el estado de carga después de la solicitud
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="flex justify-center">
      <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 pr-4 pl-4 m-10 max-w-5xl mx-auto">
        {/* Formulario de Proyecto */}
        <div className="w-full max-w-md">
          <h2 className="text-center font-serif text-colorCSS">Agregar Nuevo Proyecto</h2>
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
            <div className="mb-4">
              <label htmlFor="url" className="block text-gray-700 text-sm font-bold mb-2">URL</label>
              <input
                id="url"
                name="url"
                type="url"
                placeholder="https://ejemplo.com"
                value={formData.url}
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

        {/* Lista de Proyectos */}
        <div className="p-6 rounded-lg shadow-md">
          <h2 className="font-serif text-colorCSS text-center">Tus Proyectos</h2>
          <span className="block border-b border-[#42A5F5] my-4" />
          <ul>
            {loading ? (
              <li>Cargando proyectos...</li>
            ) : error ? (
              <li>Error: {error}</li>
            ) : (
              projects.map((project, index) => (
                <ProjectList
                  key={index}
                  {...project}
                  fetchProjects={fetchProjects}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              ))
            )}
          </ul>

          {/* Paginación */}
          {paginationLoading ? (
            <div className="text-center">Cargando...</div> 
          ) : (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectsAdmin;
