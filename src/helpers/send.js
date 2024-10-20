import axios from 'axios';

const sendRquest = async (requestObject,url) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.post(`${url}`,requestObject, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
        return response.data;
    } catch (error) {
        console.error('Error making request:', error);
        throw error;
    }
};

export default sendRquest;