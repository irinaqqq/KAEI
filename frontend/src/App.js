import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Homepage';
import About from './components/About';
import Membership from './components/Membership';
import Services from './components/Services';
import News from './components/News';
import Events from './components/Events';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

import './App.css';

function App() {
  return (
    <Router>
        <Navigation /> {/* Навигационная панель */}
      {/* <main className="main-content"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      {/* </main> */}
    </Router>
  );
}

export default App;
