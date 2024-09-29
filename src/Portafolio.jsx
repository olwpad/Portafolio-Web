import { useEffect, useState } from "react";
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shouldAnimate = windowWidth > 768;

  return (
    <>
      <Header />
      <div className="h-screen">
        <About />
      </div>

      <div className="h-screen flex justify-center items-center" id="Sobre-mi">
        {shouldAnimate ? (
          <ScrollAnimation
            animateIn="animate__animated animate__fadeInUp"
            duration={0.8}
          >
            <Aboutme />
          </ScrollAnimation>
        ) : (
          <Aboutme />
        )}
      </div>

      <div className="h-screen flex justify-center items-center" id="habilidades">
        {shouldAnimate ? (
          <ScrollAnimation
            animateIn="animate__animated animate__fadeInUp"
            duration={0.8}
          >
            <Skills />
          </ScrollAnimation>
        ) : (
          <Skills />
        )}
      </div>

      <div className="h-screen flex justify-center items-center" id="proyectos">
        {shouldAnimate ? (
          <ScrollAnimation
            animateIn="animate__animated animate__fadeInUp"
            duration={0.8}
          >
            <Projects />
          </ScrollAnimation>
        ) : (
          <Projects />
        )}
      </div>

      <div className="h-screen flex justify-center items-center" id="Educacion">
        {shouldAnimate ? (
          <ScrollAnimation
            animateIn="animate__animated animate__fadeInUp"
            duration={0.8}
          >
            <Education />
          </ScrollAnimation>
        ) : (
          <Education />
        )}
      </div>

      <div className="h-screen flex justify-center items-center" id="contacto">
        {shouldAnimate ? (
          <ScrollAnimation
            animateIn="animate__animated animate__fadeInUp"
            duration={0.6}
          >
            <Contacto />
          </ScrollAnimation>
        ) : (
          <Contacto />
        )}
      </div>
      <div className="flex-shrink-0">
  <Footer />
</div>

    </>
  );
}

export default Portafolio;
