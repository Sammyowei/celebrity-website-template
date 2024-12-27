import React, { useState } from 'react';

import './MeetLee.css';

import fancard from "../../assets/images/general/fancard.jpg"
import meetNgreet from "../../assets/images/general/lee-junho-meet-n-greet.jpg"
import mersh from "../../assets/images/general/mersh.jpg"
import live from "../../assets/images/general/live-presentation.jpg"
import Footer from "../../components/Footer/Footer.tsx"
import Alert from "../../components/Alert/Alert.tsx"


const MeetLee = () => {

  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('');

  const handleShowAlert = () => setShowAlert(true);
  const handleCloseAlert = () => setShowAlert(false);


  const handleButtonClick = (message: string) => {
    setMessage(message)
    handleShowAlert()
  };

  const sections = [
    {
      title: 'Order Fan Cards',
      description: 'Get personalized fan cards with your favorite designs.',
      buttonText: 'Order Now',
      alertMessage: 'Fan cards are now available for order! Click on the support icon to complete your order.',
      imageUrl: fancard,
      imageAlt: 'Fan Card',
    },
    // {
    //   title: 'Book Live Presentations',
    //   description: 'Schedule a live presentation with Lee for your event.',
    //   buttonText: 'Book Now',
    //   alertMessage: 'Live presentations are open for booking! Click on the support icon to complete your order.',
    //   imageUrl: live,
    //   imageAlt: 'Live Presentation',
    // },
    {
      title: 'Meet and Greet',
      description: 'Experience a personal meet and greet session with Lee.',
      buttonText: 'Reserve Spot',
      alertMessage: 'To reserve your spot for a meet and greet with Lee! Click on the support icon to complete your order.',
      imageUrl: meetNgreet,
      imageAlt: 'Meet and Greet',
    },
    {
      title: 'Order Merchandise Online',
      description: 'Shop official merchandise directly from our website.',
      buttonText: 'Shop Now',
      alertMessage: 'To purchase available Merchandise! Click on the support icon to  know more.',
      imageUrl: mersh,
      imageAlt: 'Merchandise',
    },
  ];

  return (
    <div className="meet-lee-container">
      <header>
        <h1 className="meet-lee-title">Meet Lee Junho</h1>
      </header>
      <div className="intro-section">
        <div className="intro-content">
          <p className="intro-text">
            Welcome to Lee's official page! Here, you can explore various ways to connect with Lee Junho, from ordering fan memorabilia to booking exclusive live presentations. Dive into the world of Lee and make your experience unforgettable.
          </p>

        </div>
      </div>
      <div className="meet-lee-sections">
        {sections.map((section, index) => (
          <div key={index} className="meet-lee-card">
            <div className="card-image-holder">
              <img
                src={section.imageUrl}
                alt={section.imageAlt}
                className="card-image"
              />
            </div>
            <h2 className="card-title">{section.title}</h2>
            <p className="card-description">{section.description}</p>
            <button
              className="card-button"
              onClick={() => handleButtonClick(section.alertMessage)}
            >
              {section.buttonText}
            </button>


          </div>
        ))}
      </div>





      <h1></h1>

      <h1></h1>


      <Footer></Footer>
      <Alert
        message={message}
        show={showAlert}
        onClose={handleCloseAlert}
      />


    </div>
  );
};

export default MeetLee;

/* MeetLee.css */

