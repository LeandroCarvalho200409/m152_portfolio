import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';

function Home() {
  return(
    <div className="home">
      <h1 className="pageHeader">Portfolio Modul 152 (inkl. Animation)</h1>
      <img className="animation" src={ process.env.PUBLIC_URL + "/images/animation.gif" } alt="animation" />
    </div>
  );
}

export default Home;