import React from "react";
import  "./ContentSection.css"
import junho from "../../../../assets/images/general/junho-content.jpg"
import "./ContentSection.css";

const ContentSection = () => {
  return (
    <div className="content-section">
      {/* Text Section */}
      <div className="content-text">
        <h1>Stay Updated on Lee Junho's Journey</h1>
        <p>
          Follow his updates and engage in a world you may find more relatable.
          Stay in the loop with the latest projects and achievements.
        </p>
        <div className="content-buttons">
          <button className="b-button">Join Community</button>
          
        </div>
      </div>
      {/* Image Section */}
      <div className="content-image">
        <img
          src={junho} // Replace with the actual image URL
          alt="Lee Junho Journey"
          className="responsive-image"
        />
      </div>
    </div>
  );
};

export default ContentSection;
