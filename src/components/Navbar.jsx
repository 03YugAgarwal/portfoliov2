import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import {useState} from 'react'

export default function Navbar() {

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const nav = useNavigate();


  return (
    <div className="nav">
      <div className={`hamburger-menu${hamburgerOpen?'-open':''}`} onClick={()=> setHamburgerOpen(!hamburgerOpen)}>
        <div className="hamburger-item"></div>
        <div className="hamburger-item"></div>
        <div className="hamburger-item"></div>
      </div>
      <div className="nav-heading">
        <h2 className="nav-heading-h2" onClick={() => nav('/')}>Yug Agarwal</h2>
      </div>


      <div className={`nav-links${hamburgerOpen?'-hamburger':''}`}>

        <h2><Link to="resume">Resume</Link></h2>
        <h2><a href="https://www.linkedin.com/in/yugagarwal03/" target="__blank">Linkedin</a></h2>
        {hamburgerOpen && <h2><Link to="/projects" onClick={() => setHamburgerOpen(!hamburgerOpen)}>Projects</Link></h2>}
        {<h2><a href="https://github.com/03YugAgarwal" target="__blank">Github</a></h2> && hamburgerOpen }
        {hamburgerOpen &&  <h2><Link to="/contact" onClick={() => setHamburgerOpen(!hamburgerOpen)} >Contact Me.</Link></h2>}
        <button onClick={() => nav('contact')}>Contact Me.</button>
      </div>
    </div>
  );
}
