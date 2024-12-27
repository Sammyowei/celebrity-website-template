import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home.tsx';
import NavBar from './components/Navbar/NavBar.tsx';
import AboutPage from './pages/About/AboutPage.tsx';
import Gallery from './pages/Gallery/Gallery.tsx';
import MeetLee from './pages/MeetLee/MeetLee.tsx';
import PageNotFound from './pages/404/404.tsx';
import DonationPage from './pages/DonationPage/DonationPage.tsx';

// import Footer from './components/Footer/Footer.tsx';

function App() {
  return (

    <Router>
      <div className="App">
        <div ><NavBar></NavBar></div>
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/donate" element={<DonationPage />} />
            <Route path="/meet-lee" element={<MeetLee />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>


      </div>
    </Router>
  );
}

export default App;
