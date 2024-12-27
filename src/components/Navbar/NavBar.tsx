import React, { useState, useEffect } from 'react'
import './NavBar.css'
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle responsive design based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Close menu when returning to desktop view
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    // Cleanup event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a nav item is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">Lee Junho Official</a>
        </div>

        {/* Mobile menu toggle */}
        <div
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation menu */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={closeMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link" onClick={closeMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="/donations" className="nav-link" onClick={closeMenu}>Donate</a>
          </li>
          <li className="nav-item">
            <a href="/meet-lee" className="nav-link" onClick={closeMenu}>Meet Lee</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}


export default NavBar;
