import React, { useState } from 'react';
import { FaEdit, FaTrashAlt, FaSave, FaTimes } from 'react-icons/fa';
import ProjectDel from '../../helpers/delete.js';
import projectEdit from '../../helpers/Edit.js';
import { API_URL } from '../../helpers/Urls.js';
import { mostrarMensajeError, mostrarMensajeExito } from '../../helpers/alertas.js'; 
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ title, description, url, _id, fetchProjects, currentPage, setCurrentPage }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ title, description, url });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEdit = async () => {
    const resp = await projectEdit(_id, formData, API_URL.ProjectUpdate);
    if (resp) {
      mostrarMensajeExito('Proyecto actualizado correctamente');
      fetchProjects();
      setIsEditing(false);
    } else {
      mostrarMensajeError('Error al actualizar proyecto');
      navigate('/login');
    }
  };

  const handleDelete = async () => {
    const resp = await ProjectDel(_id,API_URL.ProjectsDel);
    if (resp) {
      mostrarMensajeExito('Proyecto eliminado correctamente');
      setCurrentPage(1);
      fetchProjects(1);
    } else {
      mostrarMensajeError('Error al eliminar proyecto');
      navigate('/login');
    }
  };

  const toggleEdit = () => setIsEditing(!isEditing);

  return (
    <div
      key={_id}
      className="bg-white shadow-lg p-4 rounded-md flex flex-col justify-center items-center gap-4 transition-transform duration-300 hover:scale-105 w-[400px] h-[300px] mx-auto"
    >
      <div className="w-full">
        {isEditing ? (
          <div className="space-y-2">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Título"
            />
            <input
              type="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="URL del Proyecto"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="3"
              placeholder="Descripción"
            ></textarea>
          </div>
        ) : (
          <div className="flex flex-col items-center p-10 border border-gray-300">
          <div>
            <h3 className="text-sm md:text-md lg:text-lg font-semibold text-gray-800">{title}</h3>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm md:text-md lg:text-lg"
            >
              Ver Más
            </a>
            <p className="text-gray-500 mt-1 text-xs md:text-md lg:text-base">{description}</p>
          </div>
        </div>
        
        )}
      </div>

      <div className="flex space-x-2">
        {isEditing ? (
          <>
            <button onClick={handleEdit} className="text-green-500 hover:text-green-700">
              <FaSave />
            </button>
            <button onClick={toggleEdit} className="text-gray-500 hover:text-gray-700">
              <FaTimes />
            </button>
          </>
        ) : (
          <>
            <button onClick={toggleEdit} className="text-blue-500 hover:text-blue-700">
              <FaEdit />
            </button>
            <button onClick={handleDelete} className="text-red-500 hover:text-red-700">
              <FaTrashAlt />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
