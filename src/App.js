import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/about/About";
import ContactPage from "./pages/contact/ContactPage";
import ProjectPage from "./pages/projects/ProjectPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/projects' element={<ProjectPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
