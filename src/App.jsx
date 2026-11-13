import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Wheresection from "./component/Wheresection";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Pictures from "./component/Pictures";

const App = () => {
  return (
    <div className="bg-backgroundGreen min-h-screen">
      <Navbar />

      <Hero />
      <About />
      <Wheresection />
      <Projects />
      <Skills />
      <Pictures />
    </div>
  );
};

export default App;
