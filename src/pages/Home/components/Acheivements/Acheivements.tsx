import React from "react";
import "./Achievements.css";

const Achievements = () => {
  return (
    <section className="achievements-section">
      <div className="container">
        {/* Title Section */}
        <h2 className="title">
          Celebrating Lee Junho's Remarkable Journey
        </h2>
        <p className="subtitle">
          Lee Junho has captivated audiences with his versatile performances and dedication to his craft. From his early days in music to his rise as a leading actor, his journey is a testament to hard work and passion.
        </p>

        {/* Cards Section */}
        <div className="cards">
          {[
            {
              title: "Notable Awards and Recognitions",
              description:
                "Junho has received numerous awards, highlighting his talent and impact in the entertainment industry.",
            },
            {
              title: "Iconic Roles That Defined His Career",
              description:
                "His performances in various dramas have left a lasting impression on fans and critics alike.",
            },
            {
              title: "Recent Projects and Future Endeavors",
              description:
                "Junho continues to explore new roles, pushing his artistic boundaries.",
            },
          ].map((item, index) => (
            <div key={index} className="card">
              <div className="icon">▣</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="cta-buttons">
          <button className="btn-primary">Get in touch</button>
          
        </div>
      </div>
    </section>
  );
};

export default Achievements;
