import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import CursorGlow from "./components/CursorGlow";
import Chatbot from "./components/Chatbot";
import useReveal from "./hooks/useReveal";

function App() {
  useReveal();

  return (
    <>
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
      <BackToTop />
      <Chatbot />
    </>
  );
}

export default App;
