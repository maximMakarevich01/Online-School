import React from "react";
import "./App.scss";
import "./_normalize.scss";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./Footer/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Professor from "./pages/Professor";
import Courses from "./pages/Courses";
import ContactForm from "./components/ContactForm/ContactForm";
import DarkMode from "./components/DarkMode/DarkMode";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="content">
          <div className="toggle-wrapper">
            <DarkMode />
          </div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/professor" element={<Professor />} />
          </Routes>
          <ContactForm />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
