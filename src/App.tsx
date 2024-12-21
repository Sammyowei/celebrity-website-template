import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home.tsx';
import NavBar from './components/Navbar/NavBar.tsx';
import About from './pages/About/About.tsx';
import Gallery from './pages/Gallery/Gallery.tsx';
import MeetUp from './pages/Meet-Up/MeetUp.tsx';
import PageNotFound from './pages/404/404.tsx';
// import Footer from './components/Footer/Footer.tsx';

function App() {
  return (
    
    <Router>
    <div className="App">
   <div ><NavBar></NavBar></div>
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/meet-lee" element={<MeetUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
   
 
    </div>
  </Router>
  );
}

export default App;
