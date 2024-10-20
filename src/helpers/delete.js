import axios from 'axios';

const deleteResource = async ( id,endpoint) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.delete(`${endpoint}/${id}`, {
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

export default deleteResource;
