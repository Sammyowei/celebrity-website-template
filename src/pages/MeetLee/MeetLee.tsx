import React, { useState } from 'react';
import './MeetLee.css';
import fancard from "../../assets/images/general/fancard.jpg";
import meetNgreet from "../../assets/images/general/lee-junho-meet-n-greet.jpg";
// import mersh from "../../assets/images/general/mersh.jpg";
import Footer from "../../components/Footer/Footer.tsx";
import Alert from "../../components/Alert/Alert.tsx";
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator.tsx';

const MeetLee = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMeetModal, setShowMeetModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({ fullName: '', email: '' });


  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);

    // Validate form: Check if both fullName and email are valid
    const isNameValid = updatedFormData.fullName.trim().length > 0;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(updatedFormData.email);
    setIsFormValid(isNameValid && isEmailValid);
  };





    //


  const handleShowMeetModal = () => setShowMeetModal(true); // Show Meet and Greet modal
  const handleCloseMeetModal = () => setShowMeetModal(false); // Close Meet and Greet modal

  const handlePurchase = (prop) => {
    
    setShowAlert(true);
    setShowModal(false);  
  };





  // const handleSubmit = async ( price: string, detail:string): Promise<void> => {
    
  //   setIsLoading(true);


  //   const url = "https://jczivbnmkajinskjlgsi.supabase.co/functions/v1/payment"
 
  //   const payload = JSON.stringify({

            
  //     "full_name" :formData.fullName,
  //     "amount": parseFloat(price),
  //     "email": formData.email,
  // "detail": `${detail}`
  //   });
    


  //   try {
  //     // await mockAsyncRequest(); // Simulate asynchronous operation


      

      
  //     const response = await fetch(url, {
  //         method: "POST",
  //         headers: {
  //             "Content-Type": "application/json",
  //         },
  //         body: payload,
  //     });

  //     if (!response.ok) {
  //         throw new Error("Failed to process your request");
  //     }

  //     const data = await response.json();
  //     console.log("Response data:", data);

  //     // window.open(data.link,)
  //     window.location.href = data.link
      
  //     // alert(`Thank you for your donation, ${formData.name}!`);





  // }
  
  // catch (error) {
  //     console.error("Error occurred:", error);
  //     alert(`Something went wrong: ${error}`);
  // }
  // finally {
  //     setIsLoading(false); // Hide loading indicator after operation
  // }

  // };


  const handleSubmit = async (price: string, detail: string): Promise<void> => {
    setIsLoading(true);


    console.log(formData)
    const url = "https://jczivbnmkajinskjlgsi.supabase.co/functions/v1/payment";

    const payload = JSON.stringify({
        full_name: formData.fullName, // Ensure formData is defined
        amount: parseFloat(price),   // Validate that price is a valid number
        email: formData.email,
        detail: `${detail}`
    });


    console.log(payload);
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: payload,
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed: ${errorText}`);
        }

        if (response.headers.get("Content-Type")?.includes("application/json")) {
            const data = await response.json();
            console.log("Response data:", data);

            if (data.link) {
                window.location.href = data.link; // Ensure data.link exists
            } else {
                throw new Error("No link found in response");
            }
        } else {
            throw new Error("Invalid response format");
        }
    } catch (error: any) {
        console.error("Error occurred:", error);
        alert(`Something went wrong: ${error.message || "Unknown error"}`);
    } finally {
        setIsLoading(false);
    }
};


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
    // {
    //   title: 'Order Merchandise Online',
    //   description: 'Shop official merchandise directly from our website.',
    //   buttonText: 'Shop Now',
    //   imageUrl: mersh,
    //   imageAlt: 'Merchandise',
    // },
  ];

  const pricing = [
    { name: 'Standard', price: '1000' },
    { name: 'VIP', price: '2000' },
    { name: 'Platinum', price: '5000' },
  ];


  const meetAndGreet = {
    
    name: 'Meet and Greet with Lee', price: '5000'
  }

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
                onClick={handleShowMeetModal}
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
            <form className="order-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name:</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </form>


            <p>{ "\n\n\n"}</p>
            <div className="pricing-options">
              {pricing.map((option, index) => (
                <div key={index} className="pricing-option">
                  <span>
                    <strong>{option.name}:</strong> ${option.price}
                  </span>
                  <button
                    className="order-button"
                    onClick={() => handleSubmit(option.price, option.name)}
                    disabled={!isFormValid} // Disable if form is invalid
                  >
                    Order Now
                  </button>
                </div>
              ))}
            </div>
            <button className="modal-close" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}

       {/* Meet and Greet Modal */}
       {showMeetModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Meet and Greet</h2>
            <form className="order-form">
              <div className="form-group">
                <label>Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
           
            </form>

            
            <p>
                <strong>Price:</strong> $5000
              </p>
              <button
                className="order-button"
                onClick={() => handleSubmit(meetAndGreet.price, meetAndGreet.name)}
                disabled={!isFormValid}
              >
                Reserve Now
              </button>
            <p>{ "\n\n\n"}</p>
            <button className="modal-close" onClick={handleCloseMeetModal}>
              Close
            </button>
          </div>
        </div>
      )}

  {/* Loading Indicator */}
  {isLoading && (
                <div className="loading-overlay">
                    <LoadingIndicator />
                </div>
            )}

      <Footer />
      <Alert message={message} show={showAlert} onClose={() => setShowAlert(false)} />
    </div>
  );
};

export default MeetLee;
