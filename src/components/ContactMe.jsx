import "./ContactMe.css";
import { ReactComponent as SVG } from "../assets/arrow-right.svg";
import { ReactComponent as SVG1 } from "../assets/Vector.svg";
import { useNavigate } from "react-router-dom";

export default function ContactMe() {
  const nav = useNavigate();
  const handleBtnClick = () => {
    nav("/projects");
  };

  return (
    <div className="contactme">
      <h1 className="contactme-main">Contact Me.</h1>
      <div className="contactme-bottom">
        <button className="contactme-next-btn" onClick={handleBtnClick}>
          <SVG width="50px" height="60px" />
        </button>
      </div>
      <div className="contactme-form">
        <section className="contactme-section">
          <form>
            <input className="contactme-input" type="text" placeholder="Name" />
            <input
              className="contactme-input"
              type="email"
              placeholder="Email"
            />
            <div className="contactme-containter">
              <textarea
                className="contactme-input contactme-textarea"
                placeholder="Message"
              />
              <button className="contactme-send">
                <SVG1 />
              </button>
            </div>
          </form>
        </section>
        <section className="contactme-section">
          <div className="contactme-getintouch">
            <h2>Get In Touch</h2>
            <p>
              Your feedback is valuable to me. If you have any inquiries or
              simply want to chat, feel free to reach out to me via these social
              links.
            </p>
            <ul>
              <li>
                <a href="https://github.com/03YugAgarwal" target="__blank">
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/yugagarwal03/"
                  target="__blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="mailto:03yugagarwal@gmail.com" target="__blank">
                  03yugagarwal@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </section>
        <p className="contactme-copy">@copyright 2023</p>
      </div>
    </div>
  );
}
