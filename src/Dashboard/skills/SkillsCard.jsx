import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrashAlt, FaSave, FaTimes } from 'react-icons/fa';
import SkillDel from '../../helpers/delete.js';
import skillEdit from '../../helpers/Edit.js';
import { API_URL } from '../../helpers/Urls.js';
import { mostrarMensajeError, mostrarMensajeExito } from '../../helpers/alertas.js';
import { useNavigate } from 'react-router-dom';

const SkillsCard = ({ name, description, level, img, category, _id, fetchSkills, currentPage, setCurrentPage }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [loadingImage, setLoadingImage] = useState(true);
  const [imageSrc, setImageSrc] = useState(null);
  const [formData, setFormData] = useState({ name, description, level, category });
  
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleEdit = async () => {
    const { name, level, category, image } = formData;
    const formDataToSend = new FormData();
    formDataToSend.append('name', name);
    formDataToSend.append('level',level); 
    formDataToSend.append('category',category); 
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
    
    const resp = await skillEdit(_id, formDataToSend, API_URL.SkillsUpdate);
    if (resp) {
      mostrarMensajeExito('Habilidad actualizada correctamente');
      fetchSkills();
      setIsEditing(false);
    } else {
      mostrarMensajeError('Error al actualizar habilidad');
      navigate('/login');
    }
  };

  useEffect(() => {
    const fetchImage = async () => {
      setLoadingImage(true);
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL.Images}/${_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('No se pudo obtener la imagen');
        }
        const blob = await response.blob();
        setImageSrc(URL.createObjectURL(blob));
      } catch (error) {
        console.error('Error al cargar la imagen:', error);
      } finally {
        setLoadingImage(false);
      }
    };

    fetchImage();
  }, [_id]);

  const handleDelete = async () => {
    const resp = await SkillDel(_id, API_URL.SkillsDel);
    if (resp) {
      mostrarMensajeExito('Habilidad eliminada correctamente');
      setCurrentPage(1);
      fetchSkills(1);
    } else {
      mostrarMensajeError('Error al eliminar habilidad');
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
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:shadow-outline"
              placeholder="Nombre de la habilidad"
            />
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            >
              <option value="">Selecciona el nivel</option>
              <option value="Principiante">Principiante</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
            </select>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            >
              <option value="">Selecciona la categoría</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Herramientas">Herramientas</option>
              <option value="Lenguajes">Lenguajes</option>
            </select>
            <input
              type="file"
              accept="image/*"
              id="image"
              name="image"
              onChange={handleChange}
              className="block w-full text-sm text-gray-700 border rounded p-2"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center p-4 border bg-white">
          {loadingImage ? (
            <div className="text-center text-gray-500">Cargando imagen...</div>
          ) : (
            <img
              src={imageSrc || img}
              alt={name}
              className="w-16 h-16 object-cover mb-2 rounded-full border-2 border-gray-300"
              style={{ aspectRatio: '1 / 1' }}
            />
          )}
          <h3 className="text-sm md:text-md lg:text-lg font-semibold text-gray-800 mt-2">{name}</h3>
          <p className="text-gray-600 text-xs md:text-md lg:text-md">Nivel: {level}</p>
          <p className="text-gray-600 text-xs md:text-md lg:text-md">Categoría: {category}</p>
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

export default SkillsCard;
