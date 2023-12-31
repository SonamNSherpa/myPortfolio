import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Profile from "./components/shared/Profile";
import ProjectApp from "../src/Projects/ProjectApp";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Profile />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Projects" element={<ProjectApp />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
