import React from 'react'
import './Footer.css';



const Footer = () => {
const year = new Date().getFullYear()

    return(
        <footer className="footer">
        <div className="footer-container">
          {/* <div className="footer-section about">
            <h2>Lee Junho</h2>
            <p>
              We offer top-notch software solutions, including web services, mobile app development, game development, and project management.
            </p>
          </div> */}
  
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/gallery">Join Community</a></li>
              <li><a href="/meet-lee">Meet Lee</a></li>
            </ul>
          </div>
  
          {/* <div className="footer-section social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
              <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
              <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
              <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            </div>
          </div> */}
        </div>
  
        <div className="footer-bottom">
          <p>&copy; {year} Lee Junho Official | All Rights Reserved</p>
        </div>
      </footer>
    );
}


export default Footer;