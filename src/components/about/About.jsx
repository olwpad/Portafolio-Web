import { Detail } from './Detail';
import { Detail2 } from './Detail2';

const About = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-10 mt-6 w-full">
      <div className="col-span-6 lg:col-span-6 flex justify-center items-center mb-6">
        <Detail />
      </div>

      <div className="col-span-4 lg:col-span-4 flex justify-center items-center flex-col mt-9 relative">
        <div className="relative z-10">
          <img
            src="/perfil.png"
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
