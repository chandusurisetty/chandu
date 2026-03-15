import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UnchatPrivacy from './pages/UnchatPrivacy';
import OmniflashPrivacy from './pages/OmniflashPrivacy';
import PdfExplainerPrivacy from './pages/PdfExplainerPrivacy';
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
          <Route path="/apps/omniflash/privacy" element={<OmniflashPrivacy />} />
          <Route path="/pdfexplainer/privacy-policy.html" element={<PdfExplainerPrivacy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
