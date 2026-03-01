import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UnchatPrivacy from './pages/UnchatPrivacy';
import CustomCursor from './components/CustomCursor';
import './index.css';

function App() {
  return (
    <>
      <CustomCursor />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps/unchat/privacy" element={<UnchatPrivacy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
