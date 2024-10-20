import axios from "axios";

const edit = async (id, data, url) => {
    try {
        const response = await axios.put(`${url}/${id}`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data; 
    } catch (error) {
        console.error('Error updating data:', error.response?.data?.message || error.message);
    }
};

export default edit;
