import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Banner, CTA, Question, Shuffle } from './containers';
import { Reading, Landing } from './pages';
import { Footer, Navbar } from './components';
import './App.css';
import './Mobile.css';

function App() {
  return (
    <Router basename="/celestial-tarot">
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/reading" element={<Reading />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
