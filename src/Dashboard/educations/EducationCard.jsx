import React, { useState } from 'react';
import { FaEdit, FaTrashAlt, FaSave, FaTimes } from 'react-icons/fa';
import EducationDel from '../../helpers/delete.js';
import { formatDate } from '../../helpers/formatDate.js';
import educationEdit from '../../helpers/Edit.js';
import { API_URL } from '../../helpers/Urls.js';
import { formatToDateInput } from '../../helpers/formatDate.js';
import { mostrarMensajeError, mostrarMensajeExito } from '../../helpers/alertas.js';
import { useNavigate } from 'react-router-dom';



export const EducationCard = ({title,  date , city , description ,  _id, fetchExperiences, currentPage, setCurrentPage
}) => {
const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ title, date: formatToDateInput(date) , city, description
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEdit = async () => {
    const resp  = await educationEdit(_id, formData, API_URL.EducationUpdate);
    if (resp) {
        mostrarMensajeExito("Educación actualizada correctamente");
    } else {
        mostrarMensajeError(errorMessage);
        navigate("/login")

    }
    fetchExperiences();
    setIsEditing(false);
  };

  const handleDelete = async () => {
    const resp = await EducationDel(_id, API_URL.EducationDel);
    if (resp) {
      mostrarMensajeExito("Educación eliminada correctamente");
      setCurrentPage(1);
      fetchExperiences(1);
    } else {
      mostrarMensajeError(errorMessage);
      navigate("/login");
    }
  };

  const toggleEdit = () => setIsEditing(!isEditing);

  return (
    <div key={_id} className="bg-white shadow-lg p-4 rounded-md flex flex-col justify-center items-center gap-4 transition-transform duration-300 hover:scale-105 w-[400px] h-[300px] mx-auto">
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
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Ciudad"
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
          
          <div>
            <h3 className="text-sm md:text-md lg:text-lg font-semibold">{formData.title}</h3>
            <p className="text-gray-600 text-sm md:text-md lg:text-">{formData.city}</p>
            <span className="text-gray-500 text-sm md:text-md lg:text-">{formatDate(formData.date)}</span>
            <p className="text-gray-500 mt-1 text-xs  md:text-md lg:text-">{formData.description}</p>
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


export default EducationCard;
