import { useState } from "react";

const UrlShortner = () => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://urlshortner-backend-dmn3.onrender.com/create", {
      method: "POST",
      body: JSON.stringify({
        url: url,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <>
      <h2>UrlShortner</h2>
      <form action="">
        <input
          type="text"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          required
        />
        <button onClick={handleSubmit}>Shorten</button>
      </form>
    </>
  );
};

export default UrlShortner;
