import "./Projects.css";
import { ReactComponent as SVG } from "../assets/arrow-right.svg";
import { ReactComponent as SVG1 } from "../assets/scroll.svg";
import { useNavigate } from "react-router-dom";
import ProjectItem from "./ProjectItem";

import IMAGES from "../assets/Images";

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
      <div className="projects-item">
        <ProjectItem
          img={IMAGES.image1}
          alt="URL Shortener"
          title="URL Shortener"
          description="A URL shortener is a web service that converts long and unwieldy URLs (Uniform Resource Locators) into shorter, more manageable links. These shorter links redirect users to the original, longer URL when clicked."
          live="https://yugagarwal.codes/shorten"
          code="https://github.com/03YugAgarwal/urlshortner-backend"
        />
        <ProjectItem
          img={IMAGES.image3}
          alt="Mindful Hub"
          title="Mindful Hub"
          description="A mental health community with features such as sharing posts, live chatting, Scheduling live chat with experts, created using MERN Stack."
          live="https://yugagarwal.codes/shorten"
          code="https://github.com/03YugAgarwal/urlshortner-backend"
        />
        <ProjectItem
          img={IMAGES.image2}
          alt="Funding Website"
          title="Fund Raiser Website"
          description="[Open live only on Browser] Fund raising website, full stack application with working Google OAuth, payment integration using Stripe API, data stored and fetched from MongoDB"
          live="https://funding-theta.vercel.app/"
          code="https://github.com/03YugAgarwal/funding"
        />
        
      </div>

      <p style={{ fontSize: "40px", marginTop: '100px' }}>More Comming Soon...</p>
    </div>
  );
}
