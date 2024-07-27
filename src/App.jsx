import Education from "./components/Education/Education";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills/Skills";
import { About } from "./components/about/About";
import { Aboutme } from "./components/aboutme/Aboutme";
import { Contacto } from "./components/contactame/Contact";

import { Projects } from "./components/projects/Projects";
function App() {
  return (
    <>
      <Header />
      <div className="h-screen" >
        <About />
      </div>
      <div className="h-screen flex justify-center items-center" id="Sobre-mi">
        <Aboutme />
      </div>
      <div className="h-screen flex justify-center md:items-center" id="habilidades">
        <Skills />
      </div>
      <div className="h-screen flex justify-center md:items-center" id="proyectos">
        <Projects/>
      </div>
      <div className="h-screen flex justify-center md:items-center" id="Educacion">
        <Education/>
      </div>
      <div className="h-screen flex justify-center md:items-center" id="contacto">
        <Contacto/>
      </div>
    </>
  );
}

export default App;
