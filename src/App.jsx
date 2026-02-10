import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
    <>
      <AnimatedBackground />
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
