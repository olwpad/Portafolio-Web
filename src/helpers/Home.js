import axios from 'axios';
import { API_URL } from '../helpers/Urls';

export const fetchHomeData = async (token) => {
  const response = await axios.get(API_URL.Home, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const fetchImage = async (id, token) => {
  const response = await axios.get(`${API_URL.Images3}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
    responseType: 'blob',
  });
  return URL.createObjectURL(response.data);
};

export const updateHome = async (id, formData) => {
  return await axios.put(`${API_URL.HomeUpdate}/${id}`, formData);
};
