import React from 'react';
//import './App.css';
import "./styles/styles.css"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './area/Home/Home';
import Predictions from './area/Predictions/Predictions';
import Blog from './area/Blog/Blog';
import BlogArticle from './area/Blog/BlogArticle';
import About from './area/About/About';
import Contact from './area/Contact/Contact';
import Community from './area/Community/Community';
import Member from './area/Member/Member';
import Webinars from './area/Webinars/Webinars';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predictions" element={<Predictions />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article" element={<BlogArticle />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
        <Route path="/membership" element={<Member />} />
        <Route path="/webinars" element={<Webinars />} />
      </Routes>
    </Router>
  );
}

export default App;
