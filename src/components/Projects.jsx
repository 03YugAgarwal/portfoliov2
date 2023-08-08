import "./Projects.css";
import { ReactComponent as SVG } from "../assets/arrow-right.svg";
import { ReactComponent as SVG1 } from "../assets/scroll.svg";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const nav = useNavigate();
  const handleHomeBtnClick = () => {
    nav("/");
  };
  const handleContactBtnClick = () => {
    nav("/contact");
  };

  return (
    <div className="projects">
      <h1 className="projects-main">Projects.</h1>
      <h2 className="projects-secondary">
        These are some of the projects I have worked on along with the tech
        stacks I have used.
      </h2>
      <div className="projects-bottom">
        <button className="projects-next-btn" onClick={handleHomeBtnClick}>
          <SVG width="50px" height="60px" />
        </button>
        <button
          className="projects-next-btn contact"
          onClick={handleContactBtnClick}
        >
          <SVG width="50px" height="60px" />
        </button>
      </div>
      <div className="projects-scroll-icon">
        <SVG1 />
      </div>

      <p style={{marginTop: "290px", fontSize: '40px'}}>WORK IN PROGRESS</p>
    </div>
  );
}
