import "./Home.css";
import { ReactComponent as SVG } from "../assets/arrow-right.svg";

export default function Home() {
  return (
    <div className="home">
      <h1 className="home-main">FRONT-END DEV.</h1>
      <h2 className="home-secondary">Crafting Seamless Web</h2>
      <h2 className="home-secondary">Experiences.</h2>
      <div className="home-bottom">
        <h3 className="home-h3">@freelancer</h3>
        <button>
          <SVG width="50px" height="60px" />
        </button>
      </div>
    </div>
  );
}
