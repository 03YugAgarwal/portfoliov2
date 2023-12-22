import "./ContactMe.css";
import { ReactComponent as SVG } from "../assets/arrow-right.svg";
import { ReactComponent as SVG1 } from "../assets/Vector.svg";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function ContactMe() {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const [isValid, setIsValid] = useState(false);
  const [postCheck, setPostCheck] = useState(false)

  const nav = useNavigate();
  const handleBtnClick = () => {
    nav("/projects");
  };

  const handleNameChange = (e) => {
    setMessage({ ...message, name: e.target.value });
  };
  const handleEmailChange = (e) => {
    setMessage({ ...message, email: e.target.value });
  };
  const handleMessageChange = (e) => {
    setMessage({ ...message, message: e.target.value });
  };

  const handleMsgSubmit = async (e) => {
    e.preventDefault();
    console.log("HI");
    if(postCheck){
      return
    }
    
    const detailCollection = collection(db, "message");
    const date = new Date();
    const newMessage = { ...message, date };
    await addDoc(detailCollection, newMessage);
    setPostCheck(true)
    setMessage({
      name: "",
      email: "",
      message: "Your Message has been Submitted!",
    });
  };

  return (
    <div className="contactme">
      <h1 className="contactme-main">Contact Me.</h1>
      <div className="contactme-bottom">
        <button
          className="contactme-next-btn"
          onClick={handleBtnClick}
          required
        >
          <SVG width="50px" height="60px" />
        </button>
      </div>
      <div className="contactme-form">
        <section className="contactme-section">
          <form>
            <input
              className="contactme-input"
              type="text"
              placeholder="Name"
              value={message.name}
              onChange={handleNameChange}
              minLength={3}
              required
            />
            <input
              className="contactme-input"
              type="email"
              placeholder="Email"
              value={message.email}
              onChange={handleEmailChange}
              required
            />
            <div className="contactme-containter">
              <textarea
                className="contactme-input contactme-textarea"
                placeholder="Message"
                value={message.message}
                onChange={handleMessageChange}
              />
              {!postCheck && <button className="contactme-send" onClick={handleMsgSubmit}>
                <SVG1 />
              </button>}
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
      </div>
    </div>
  );
}
