import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Video from './Video';
import Bildergallerie from './Bildegallerie';
import Home from "./Home";
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1 className="title">Portfolio</h1>
        <div className="linkContainer">
          <Link className="link" to="/"><p className="linkText">Home</p></Link>
          <Link className="link" to="video"><p className="linkText">Video</p></Link>
          <Link className="link" to="gallerie"><p className="linkText">Bildergallerie</p></Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/gallerie" element={<Bildergallerie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
