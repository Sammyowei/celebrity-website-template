import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Lee Junho</h1>
        <p>
          Dive deep into the life, career, and accomplishments of the talented South Korean artist, Lee Junho.
        </p>
      </header>
      
      {/* Early Life Section */}
      <section className="about-section">
        <div className="section-content">
          <div className="section-text">
            <h2>Early Life and Background</h2>
            <p>
              Lee Junho was born on January 25, 1990, in Seoul, South Korea. Known for his charismatic presence and relentless dedication, Junho's early years were marked by an unyielding passion for music and performance. In 2006, he rose to prominence by winning the competition show <em>Superstar Survival</em>, which served as a gateway into the entertainment industry.
            </p>
            <p>
              He attended Howon University, where he honed his craft in acting and performance, later continuing his education at Sejong University, majoring in cinematography.
            </p>
          </div>
          <div className="section-image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Lee_Jun-ho_at_an_event_in_2022.jpg/800px-Lee_Jun-ho_at_an_event_in_2022.jpg"
              alt="Young Lee Junho"
            />
          </div>
        </div>
      </section>
      
      {/* Career Section */}
      <section className="about-section">
        <div className="section-content reverse">
          <div className="section-image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Lee_Jun-ho_-_fan_meeting_2021.jpg/800px-Lee_Jun-ho_-_fan_meeting_2021.jpg"
              alt="Lee Junho Career Highlights"
            />
          </div>
          <div className="section-text">
            <h2>Career Highlights</h2>
            <p>
              Junho debuted as a member of the popular K-pop boy band <strong>2PM</strong> in 2008 under JYP Entertainment. The group quickly rose to fame, becoming one of the most recognized acts in South Korea and internationally. His dynamic stage presence and exceptional vocals set him apart as a standout performer.
            </p>
            <p>
              Transitioning into acting, Junho made his debut in the film <em>Cold Eyes</em> (2013), which garnered critical acclaim. He continued his acting journey with notable roles in TV series like <em>Good Manager</em> (2017), <em>Rain or Shine</em> (2017–2018), and <em>The Red Sleeve</em> (2021). The latter solidified his position as a leading actor, earning him the Best Actor Award at the 58th Baeksang Arts Awards.
            </p>
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section className="about-section">
        <div className="section-content">
          <div className="section-text">
            <h2>Achievements and Discography</h2>
            <p>
              As a solo artist, Junho has released two Korean studio albums and numerous singles that showcase his vocal prowess. His Japanese albums and extended plays have also seen great success, reflecting his global fanbase.
            </p>
            <p>
              Beyond music and acting, Junho has received numerous accolades, including prestigious awards for both his acting and musical talents. He remains an inspirational figure for aspiring artists worldwide.
            </p>
          </div>
          <div className="section-image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lee_Jun-ho_in_The_Red_Sleeve.jpg/800px-Lee_Jun-ho_in_The_Red_Sleeve.jpg"
              alt="Lee Junho in The Red Sleeve"
            />
          </div>
        </div>
      </section>
      
      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Book Lee Junho for an In-Person Engagement</h2>
        <p>
          Whether for a fan meeting, public speaking, or personal appearance, Lee Junho is ready to inspire and entertain. Click the button below to make a booking.
        </p>
        <button className="cta-button">Book Now</button>
      </section>
    </div>
  );
};

export default AboutPage;
