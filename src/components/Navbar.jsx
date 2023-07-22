import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-heading">
        <h2 className="nav-heading-h2">Yug Agarwal</h2>
      </div>
      <div className="nav-links">
        <h2><a href="">Resume</a></h2>
        <h2><a href="">Linkedin</a></h2>
        <button>Contact Me.</button>
      </div>
    </div>
  );
}
