// Import necessary modules
import React, { useState } from 'react';
import
donations from "../../assets/images/general/donation.jpg"
import './DonationPage.css'; // For styling (create this file to style the page)
import Alert from "../../components/Alert/Alert.tsx"
import Footer from "../../components/Footer/Footer.tsx"

type FormData = {
    name: string;
    email: string;
    amount: string;
};

const DonationPage: React.FC = () => {
    // State for form inputs
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        amount: ''
    });

    const [showAlert, setShowAlert] = useState(false);

    const handleShowAlert = () => setShowAlert(true);
    const handleCloseAlert = () => setShowAlert(false);
    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // alert(`Thank you for your donation, ${formData.name}!`);
        handleShowAlert();
        // Logic to process the donation can be added here
    };

    return (
        <div className="donation-page">
            <header className="header">
                <h1>Lee Junho Charity Foundation</h1>
                <p className="mission">
                    "In a world facing unprecedented challenges such as natural disasters, food insecurity, and lack of education, your support can be a beacon of hope for those who need it the most."
                </p>
            </header>

            <section className="about-section">
                <h2>About the Fundraiser</h2>
                <p>
                    Lee Junho, renowned celebrity and philanthropist, is committed to supporting underprivileged communities
                    through this fundraiser. Your contributions can help provide essential resources such as food, education,
                    and healthcare to those in need.
                </p>
                {/* <div className="image-placeholder">
                    <img src={donations} alt="Lee Junho with beneficiaries" />
                </div> */}
            </section>

            <form className="donation-form" onSubmit={handleSubmit}>
                <h2>Make a Donation</h2>
                <p className="form-description">
                    Every contribution brings us closer to a brighter and more equitable future. Thank you for joining us in this mission.
                </p>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="amount">Donation Amount ($)</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        placeholder="Enter donation amount"
                        value={formData.amount}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="donate-button">Donate Now</button>
            </form>
            <Alert
                message={`Please contact support to make your donation of \$${formData.amount}`}
                show={showAlert}
                onClose={handleCloseAlert}
            />


            <h1>{`\n\n\n\n`}</h1>

            <Footer />
        </div>
    );
};

export default DonationPage;
