// src/pages/Home.js
import React from 'react';
import HeroSection from './components/Header/HeroSection.tsx';
import Footer from '../../components/Footer/Footer.tsx';
import Achievements from './components/Acheivements/Acheivements.tsx';
import ContentSection from './components/ContentSection/ContentSection.tsx'; 
import MeetSection from './components/MeetSection/MeetSection.tsx';
import NavBar from '../../components/Navbar/NavBar.tsx';
function Home() {
  return (
    <div className="page">
      <HeroSection/>
      <Achievements/>
      <ContentSection/>
      <MeetSection/>
      <Footer/>
    </div>
  );
}

export default Home;