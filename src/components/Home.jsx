import "./Home.css";
import { ReactComponent as SVG } from "../assets/arrow-right.svg";
import { useNavigate } from "react-router-dom";

import { useRef, useEffect } from "react";

import { gsap, Power3 } from "gsap";

export default function Home() {
  const nav = useNavigate();
  const handleBtnClick = () => {
    nav("projects");
  };

  let homeItem = useRef(null);
  let homeItem_1 = useRef(null);
  let homeItem_2 = useRef(null);
  let homeItem_3 = useRef(null);
  let homeItem_4 = useRef(null);

  let t1 = gsap.timeline();
  let ease = Power3.easeOut();

  useEffect(() => {
    t1.from(homeItem, 0.5, {
      y: 75,
      opacity: 0,
      ease: ease,
      delay: 0.5,
    });
    t1.from(homeItem_1, 0.5, {
      y: 75,
      opacity: 0,
      ease: ease,
    });
    t1.from(homeItem_2, 0.5, {
      y: 75,
      opacity: 0,
      ease: ease,
    });
    t1.from([homeItem_4,homeItem_3], 0.5, {
      y: 75,
      opacity: 0,
      ease: ease,
      stagger: 0.5
    });
  }, [ease, t1]);

  return (
    <div className="home">
      <h1
        className="home-main"
        ref={(el) => {
          homeItem = el;
        }}
      >
        FULL-STACK DEV.
      </h1>
      <h2
        className="home-secondary"
        ref={(el) => {
          homeItem_1 = el;
        }}
      >
        Crafting Seamless Web
      </h2>
      <h2
        className="home-secondary"
        ref={(el) => {
          homeItem_2 = el;
        }}
      >
        Experiences.
      </h2>
      <button
        className="home-project-button"
        ref={(el) => {
          homeItem_4 = el;
        }}
        onClick={handleBtnClick}
      >
        {/* <SVG width="50px" height="60px" /> */}
        <h3>Project</h3>
      </button>
      <div className="home-bottom">
        <h3
          className="home-h3"
          ref={(el) => {
            homeItem_3 = el;
          }}
        >
          @student
        </h3>
        <button className="next-btn" onClick={handleBtnClick}>
          <SVG width="50px" height="60px" />
        </button>
      </div>
    </div>
  );
}
