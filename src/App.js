import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Video from './Video';
import Bildergallerie from './Bildegallerie';
import Home from "./Home";

function App() {
  return(
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="video">Video</Link>
        <Link to="gallerie">Bildergallerie</Link>
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
