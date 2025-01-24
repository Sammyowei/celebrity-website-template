import React from 'react'
import './Footer.css';



const Footer = () => {
const year = new Date().getFullYear()

    return(
      <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-logo">
          <h3>Lee Junho</h3>
          <p>
            Celebrating an inspiring journey in music, acting, and dedication to the arts.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/achievements">Achievements</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>Email: <a href="mailto:info@leejunho.com">support@leejunho.xyz</a></li>
            {/* <li>Phone: +123-456-7890</li> */}
            <li>Address: Seoul, South Korea</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Lee Junho. All Rights Reserved.</p>
      </div>
    </footer>
    );
}


export default Footer;