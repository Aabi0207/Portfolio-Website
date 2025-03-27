import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeOut(true), 1000); // Adjust delay if needed
  }, []);

  return (
    <div className={`preloader-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="preloader">
        <div className="outer-ring pink-ring"></div>
        <div className="outer-ring blue-ring"></div>
        <div className="wave-circle">
          <div className="wave"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
