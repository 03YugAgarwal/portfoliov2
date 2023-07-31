import "./Navbar.css";
import {useState} from 'react'

export default function Navbar() {

  const [hamburgerOpen, setHamburgerOpen] = useState(false);


  return (
    <div className="nav">
      <div className={`hamburger-menu${hamburgerOpen?'-open':''}`} onClick={()=> setHamburgerOpen(!hamburgerOpen)}>
        <div className="hamburger-item"></div>
        <div className="hamburger-item"></div>
        <div className="hamburger-item"></div>
      </div>
      <div className="nav-heading">
        <h2 className="nav-heading-h2">Yug Agarwal</h2>
      </div>


      <div className={`nav-links${hamburgerOpen?'-hamburger':''}`}>

        <h2><a href="">Resume</a></h2>
        <h2><a href="">Linkedin</a></h2>
        {hamburgerOpen && <h2><a href="">Projects</a></h2>}
        {<h2><a href="">Github</a></h2> && hamburgerOpen }
        {hamburgerOpen &&  <h2><a href="">Contact Me.</a></h2>}
        <button>Contact Me.</button>
      </div>
    </div>
  );
}
