import { Detail } from './Detail';
import { Detail2 } from './Detail2';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../helpers/Urls';
const About = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const response = await axios.get(`${API_URL.Home1}`);
        console.log(response.data);
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHome();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <section className="grid grid-cols-1 lg:grid-cols-10 mt-6 w-full">
      <div className="col-span-6 lg:col-span-6 flex justify-center items-center mb-6">
        <Detail data={data}
        />
      </div>

      <div className="col-span-4 lg:col-span-4 flex justify-center items-center flex-col mt-9 relative">
        <div className="relative z-10">
          <img
            src={`${API_URL.Images2}${data.imageUrlPublic}`}
            alt="Descripción de la imagen"
            className="lg:h-[550px] object-cover rounded-lg animate-fadeInFromRight2 animate__delay-1s"
          />
        </div>
        <Detail2 />
      </div>
  
    </section>
  );
};

export default About;
