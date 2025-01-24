import React, { useState } from 'react';
import './MeetLee.css';
import fancard from "../../assets/images/general/fancard.jpg";
import meetNgreet from "../../assets/images/general/lee-junho-meet-n-greet.jpg";
import mersh from "../../assets/images/general/mersh.jpg";
import Footer from "../../components/Footer/Footer.tsx";
import Alert from "../../components/Alert/Alert.tsx";

const MeetLee = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('');

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const sections = [
    {
      title: 'Order Fan Cards',
      description: 'Get personalized fan cards with your favorite designs.',
      buttonText: 'Order Now',
      imageUrl: fancard,
      imageAlt: 'Fan Card',
    },
    {
      title: 'Meet and Greet',
      description: 'Experience a personal meet and greet session with Lee.',
      buttonText: 'Reserve Spot',
      imageUrl: meetNgreet,
      imageAlt: 'Meet and Greet',
    },
    {
      title: 'Order Merchandise Online',
      description: 'Shop official merchandise directly from our website.',
      buttonText: 'Shop Now',
      imageUrl: mersh,
      imageAlt: 'Merchandise',
    },
  ];

  const pricing = [
    { name: 'Standard', price: '$1000' },
    { name: 'VIP', price: '$2000' },
    { name: 'Platinum', price: '$5000' },
  ];

  return (
    <div className="meet-lee-container">
      <header className="meetsectionhere">
        <h1 className="meet-lee-title">Meet Lee</h1>
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
            {section.title === 'Order Fan Cards' ? (
              <button className="card-button" onClick={handleShowModal}>
                {section.buttonText}
              </button>
            ) : (
              <button
                className="card-button"
                onClick={() => setShowAlert(true)}
              >
                {section.buttonText}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Fan Card Pricing</h2>
            <div className="pricing-options">
              {pricing.map((option, index) => (
                <div key={index} className="pricing-option">
                  <span>
                    <strong>{option.name}:</strong> {option.price}
                  </span>
                  <button className="order-button">Order Now</button>
                </div>
              ))}
            </div>
            <button className="modal-close" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
      <Alert message={message} show={showAlert} onClose={() => setShowAlert(false)} />
    </div>
  );
};

export default MeetLee;
