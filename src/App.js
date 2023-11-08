import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Banner, CTA, Question, Shuffle } from './containers';
import { Reading, Landing } from './pages';
import { Footer, Navbar } from './components';
import './App.css';
import './Mobile.css';

function App() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Render reading page when 'Get A Reading' is clicked
  const handleMenuToggle = (e) => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Router basename="/celestial-tarot">
      <Navbar handleMenuToggle={handleMenuToggle} isMobileMenuOpen={isMobileMenuOpen} />
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/reading" element={<Reading key={isMobileMenuOpen} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
