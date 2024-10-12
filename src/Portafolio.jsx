import ScrollAnimation from "react-animate-on-scroll";
import Header from "./components/Header";
import About from "./components/about/About";
import Aboutme from "./components/aboutme/Aboutme";
import Skills from "./components/Skills/Skills";
import Projects from "./components/projects/Projects";
import Education from "./components/Education/Education";
import Contacto from "./components/contactame/Contact";
import Footer from "./Footer";
function Portafolio() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <div className="min-h-screen flex justify-center items-center bg-gray-50" id="home">
          <About />
        </div>

        <div className="min-h-screen flex justify-center items-center" id="Sobre-mi">
          <ScrollAnimation
            animateIn="animate__animated animate__fadeInUp"
            duration={0.8}
          >
            <Aboutme />
          </ScrollAnimation>
        </div>

        <div className="min-h-screen flex justify-center items-center" id="habilidades">
          <ScrollAnimation
            animateIn="animate__animated animate__fadeInUp"
            duration={0.8}
          >
            <Skills />
          </ScrollAnimation>
        </div>

        <div className="min-h-screen flex justify-center items-center" id="proyectos">
          <ScrollAnimation
            animateIn="animate__animated animate__fadeInUp"
            duration={0.8}
          >
            <Projects />
          </ScrollAnimation>
        </div>

        <div className="min-h-screen flex justify-center items-center" id="Educacion">
          <ScrollAnimation
            animateIn="animate__animated animate__fadeInUp"
            duration={0.8}
          >
            <Education />
          </ScrollAnimation>
        </div>

        <div className="min-h-screen flex justify-center items-center" id="contacto">
          <ScrollAnimation
            animateIn="animate__animated animate__fadeInUp"
            duration={0.6}
          >
            <Contacto />
          </ScrollAnimation>
        </div>
      </main>

      <Footer className="mt-auto" />
    </div>
  );
}

export default Portafolio;
