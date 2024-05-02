import About  from "./components/About";
import SocialLinks from "./components/SocialLinks";
import Home from "./components/home";
import Skills from "./components/skills";
import Contact from "./components/Contact";
import Projects from "./components/projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
