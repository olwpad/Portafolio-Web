import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../helpers/Urls';
import homeEdit from '../../helpers/Edit';
import HomeForm from './HomeForm';
import HomePreview from './HomePreview';

const HomeAdmin = () => {
  const [formData, setFormData] = useState({
    greeting: '',
    name: '',
    description: '',
    imageUrl: null,
  });

  const [loading, setLoading] = useState(true);
  const [loadingImage, setLoadingImage] = useState(false);
  const [error, setError] = useState(null);
  const [id, setId] = useState(null);
  const [homeData, setHomeData] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //
    const { greeting, name, description, imageUrl } = formData;

    const formDataToSend = new FormData();
    formDataToSend.append('greeting', greeting);
    formDataToSend.append('name', name);
    formDataToSend.append('description', description);
    if (imageUrl) {
      formDataToSend.append('image', imageUrl);
    }

    try {
      await homeEdit(id, formDataToSend, API_URL.HomeUpdate);
      await fetchHomeData();
      await fetchImage();
      setFormData({ greeting: '', name: '', description: '', imageUrl: null });
    } catch (err) {
      console.error('Error updating home:', err);
      setError('Failed to update home. Please try again later.');
    }
  };

  const fetchHomeData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL.Home, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = response.data;
      setHomeData(data);
      setId(data._id);
      setFormData({ greeting: data.greeting || '', name: data.name || '', description: data.description || '', imageUrl: data.imageUrl,
      });
    } catch (err) {
      setError('Error fetching home data. Please try again later.');
      console.error('Error fetching home data:', err);
    } finally {
      setLoading(false);
    }
  };
  const fetchImage = async () => {
    if (!id) return;
    setLoadingImage(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL.Images3}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch image');
      }
      const blob = await response.blob();
      setImageSrc(URL.createObjectURL(blob));
    } catch (error) {
      console.error('Error loading image:', error);
    } finally {
      setLoadingImage(false);
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  useEffect(() => {
    fetchImage();
  }, [id]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex-1 p-4 sm:p-6">
        <h1 className="text-2xl mb-4 text-center text-colorCSS font-serif">Datos Actualizados</h1>
        <HomePreview
          loading={loading}
          error={error}
          homeData={homeData}
          imageSrc={imageSrc}
        />
      </div>

      <div className="flex-1 p-4 sm:p-6">
        <h2 className="text-2xl mb-4 text-center text-colorCSS font-serif">Actualizar Home</h2>
        <HomeForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default HomeAdmin;
