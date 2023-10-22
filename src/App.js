import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Banner, CTA } from './containers';
import { Question, Shuffle, Landing } from './pages';
import { Navbar } from './components';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/question" element={<Question />} />
          <Route path="/shuffle" element={<Shuffle />} />
          <Route path="/cta" element={<CTA />} />
        </Routes>
      </div>
      <Navbar />
    </Router>
  );
}

export default App;
