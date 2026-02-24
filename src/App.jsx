import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import UnchatPrivacy from './pages/UnchatPrivacy';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/apps/unchat/privacy" element={<UnchatPrivacy />} />
      </Routes>
    </Router>
  );
}

export default App;
