import { useState } from "react";

import './UrlShorten.css'

const UrlShortner = () => {
  const [url, setUrl] = useState("");
  const [short, setShort] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://urlshortner-backend-dmn3.onrender.com/create", {
      // fetch("http://localhost:3000/create", {
      method: "POST",
      body: JSON.stringify({
        url: url,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setShort(json));
  };

  return (
    <div className="urlshorten">
      <h2>UrlShortner</h2>
      <form action="">
        <p> (without https://)</p>
        <input
          type="text"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          placeholder="www.yugagarwal.codes"
          required
        />
        <button onClick={handleSubmit}>Shorten</button>
      </form>
      <h3>
        The Short Link is:{" "}
        { short && <a href={`https://yugagarwal.codes/s/${short.short}`} target="__blank">
          https://yugagarwal.codes/s/{short.short}
        </a>}
      </h3>
    </div>
  );
};

export default UrlShortner;
