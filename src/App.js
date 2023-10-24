import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Banner, CTA, Question, Shuffle } from './containers';
import { Reading, Landing } from './pages';
import { Navbar } from './components';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/cta" element={<CTA />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
