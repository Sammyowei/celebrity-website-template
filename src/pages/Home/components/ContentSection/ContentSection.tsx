import React from "react";
import "./ContentSection.css"
import junho from "../../../../assets/images/general/junho-content.jpg"
import "./ContentSection.css";
import { useNavigate } from 'react-router-dom';


const ContentSection = () => {

  const navigate = useNavigate();


  const handleClick = () => {
    navigate('/meet-lee');

  };
  return (
    <div className="content-section">
      {/* image section */}
      <div className="content-image">
        <img
          src={junho} // Replace with the actual image URL
          alt="Lee Junho Journey"
          className="responsive-image"
        />
      </div>
      {/* Text Section */}
      <div className="content-text">
        <h1>Stay Updated on Lee Junho's Journey</h1>
        <p>
          Follow his updates and engage in a world you may find more relatable.
          Stay in the loop with the latest projects and achievements.
        </p>
        <div className="content-buttons">
          <button className="b-button" onClick={
            handleClick
          }>Join Community</button>

        </div>
      </div>
    </div>
  );
};

export default ContentSection;
