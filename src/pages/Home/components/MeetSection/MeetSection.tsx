import React from "react";
import "./MeetSection.css";
import { useNavigate } from 'react-router-dom';


const MeetSection = () => {



  const navigate = useNavigate();


  const handleClick = () => {
    navigate('/meet-lee');

  };
  return (
    <section className="meet-section">
      <h2>Meet Lee Junho in Person!</h2>
      <p>
        Don’t miss your chance to connect with Lee in a once-in-a-lifetime
        experience. It's set to inspire us.
      </p>
      <div className="meet-buttons">
        <button className="mm-button" onClick={
          handleClick
        }>Book lee</button>
        <button className="mm-button" onClick={
          handleClick
        }>Learn More</button>
      </div>
    </section>
  );
};

export default MeetSection;
