import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from '../App';
import Experience from './experience';
import Navbar from './navbar';
const Home = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<Experience />} />
        {/* <Route path="/about" element={<Navbar />} /> */}
      </Routes>
    </Router>
  );
};

export default Home;

