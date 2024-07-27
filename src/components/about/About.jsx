import { Detail } from './Detail';
import { Detail2 } from './Detail2';
export const About = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 p-10 md:p-20 gap-5 mt-9">
      <Detail/>
      <div className="flex justify-center col-span-1 animate__animated animate__fadeIn md:mt-0 mt-10">
        <img
          src="/perfil.png"
          alt="Descripción de la imagen"
          className="rounded-full shadow-xl w-[90%] h-auto object-cover"
        />
      </div>
      <Detail2/>
    </section>
  );
};
