import React from 'react';
import Header from "./components/Header";
import About from "./components/About";
import TechStack from './components/TechStack';
import Projects from "./components/dataProjects";
import Contact from "./components/Contacts";

function App() {
  return (
    <div className="bg-dark text-white min-vh-100">
      <Header />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
