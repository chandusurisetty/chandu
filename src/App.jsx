import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UnchatPrivacy from './pages/UnchatPrivacy';
import OmniflashPrivacy from './pages/OmniflashPrivacy';
import MoodshiftPrivacy from './pages/MoodshiftPrivacy';
import StylesniperPrivacy from './pages/StylesniperPrivacy';
import AutoloopPrivacy from './pages/AutoloopPrivacy';
import WebExplainerPrivacy from './pages/WebExplainerPrivacy';
import OmniControlPrivacy from './pages/OmniControlPrivacy';
import PocketHostPrivacy from './pages/PocketHostPrivacy';
import MyslatePrivacy from './pages/MyslatePrivacy';
import PocketaiPrivacy from './pages/PocketaiPrivacy';
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
          <Route path="/apps/moodshift/privacy" element={<MoodshiftPrivacy />} />
          <Route path="/apps/stylesniper/privacy" element={<StylesniperPrivacy />} />
          <Route path="/apps/autoloop/privacy" element={<AutoloopPrivacy />} />
          <Route path="/apps/omnicontrol/privacy" element={<OmniControlPrivacy />} />
          <Route path="/apps/omnicontrol/privacy-policy.html" element={<OmniControlPrivacy />} />
          <Route path="/apps/pockethost/privacy" element={<PocketHostPrivacy />} />
          <Route path="/apps/pockethost/privacy-policy.html" element={<PocketHostPrivacy />} />
          <Route path="/apps/myslate/privacy" element={<MyslatePrivacy />} />
          <Route path="/apps/myslate/privacy-policy.html" element={<MyslatePrivacy />} />
          <Route path="/apps/pocketai/privacy" element={<PocketaiPrivacy />} />
          <Route path="/apps/pocketai/privacy-policy.html" element={<PocketaiPrivacy />} />
          <Route path="/pdfexplainer/privacy-policy.html" element={<WebExplainerPrivacy />} />
          <Route path="/webexplainer/privacy-policy.html" element={<WebExplainerPrivacy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
