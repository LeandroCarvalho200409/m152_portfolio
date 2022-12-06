import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Video from './Video';
import Bildergallerie from './Bildegallerie';
import Home from "./Home";
import './index.css'

function App() {

  let activeClassName = "activeLink";

  return (
    <BrowserRouter>
      <nav>
        <div className="titleContainer">
          <h1 className="title"><p>Portfolio</p></h1>
        </div>
        <div className="linkContainer">
          <NavLink className="link" to="/"> <p className="linkText">Home</p> </NavLink>
          <NavLink className="link" to="video"><p className="linkText">Video</p></NavLink>
          <NavLink className="link" to="gallerie"><p className="linkText">Bildergallerie</p></NavLink>
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
