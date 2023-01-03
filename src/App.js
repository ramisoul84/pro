import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Skills from "./pages/Skills";
import SkillBar from "./pages/SkillBar";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
