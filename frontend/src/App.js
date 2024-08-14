import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Homepage';
import About from './components/About';
// import Partners from './components/Partners';
import Membership from './components/Membership';
import Services from './components/Services';
import News from './components/News';
import Events from './components/Events';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import React, { useState, useEffect } from 'react';

import AOS from 'aos';
import './styles/App.css';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/bootstrap-icons/bootstrap-icons.css';
import 'aos/dist/aos.css';
import './assets/swiper/swiper-bundle.min.css';
import './styles/main.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 500, 
      easing: 'ease-in-out', 
    });
  }, []);

    
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);


  return (
    <>
      {loading && (
        <div id="preloader">
        </div>
      )}


      {/* Основное содержимое */}
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/partners" element={<Partners />} /> */}
          <Route path="/membership" element={<Membership />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
