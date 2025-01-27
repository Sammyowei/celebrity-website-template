import React, { useState } from 'react';
import './DonationPage.css';
import Footer from '../../components/Footer/Footer.tsx';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator.tsx';

type FormData = {
    name: string;
    email: string;
    amount: string;
};

const DonationPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        amount: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // const mockAsyncRequest = (): Promise<void> => {
    //     return new Promise((resolve) => setTimeout(resolve, 5000)); // Mock 5-second request
    // };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setIsLoading(true); // Show loading indicator


        const url = "https://jczivbnmkajinskjlgsi.supabase.co/functions/v1/payment"



    
        const payload = JSON.stringify({

            
            "full_name" :formData.name,
            "amount": parseFloat(formData.amount),
            "email": formData.email,
        "detail": "Donation"
            
            
    });
        try {
            // await mockAsyncRequest(); // Simulate asynchronous operation


            

            
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: payload,
            });
    
            if (!response.ok) {
                throw new Error("Failed to process your request");
            }
    
            const data = await response.json();
            console.log("Response data:", data);
    
            // window.open(data.link,)
            window.location.href = data.link
            
            alert(`Thank you for your donation, ${formData.name}!`);





        }
        
        catch (error) {
            console.error("Error occurred:", error);
            alert("Something went wrong. Please try again.");
        }
        finally {
            setIsLoading(false); // Hide loading indicator after operation
        }

        // alert(`Thank you for your donation, ${formData.name}!`);
    };

    return (
        <div className="donation-page">
            <header className="header">
                <h1>Lee Junho Charity Foundation</h1>
                <p className="mission">
                    "In a world facing unprecedented challenges such as natural disasters, food insecurity, and lack of
                    education, your support can be a beacon of hope for those who need it the most."
                </p>
            </header>

            <section className="about-section">
                <h2>About the Fundraiser</h2>
                <p>
                    Lee Junho, renowned celebrity and philanthropist, is committed to supporting underprivileged
                    communities through this fundraiser. Your contributions can help provide essential resources such as
                    food, education, and healthcare to those in need.
                </p>
            </section>

            <form className="donation-form" onSubmit={handleSubmit}>
                <h2>Make a Donation</h2>
                <p className="form-description">
                    Every contribution brings us closer to a brighter and more equitable future. Thank you for joining us
                    in this mission.
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

                <button type="submit" className="donate-button">
                    Donate Now
                </button>
            </form>

            {/* Loading Indicator */}
            {isLoading && (
                <div className="loading-overlay">
                    <LoadingIndicator />
                </div>
            )}

            <Footer />
        </div>
    );
};

export default DonationPage;
