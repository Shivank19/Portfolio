import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPortfolio from './components/MainPortfolio';
import AlternatePage from './components/AlternatePage';
import AllProjectsPage from './components/AllProjectsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          {/* <Route path="/alternate" element={<AlternatePage />} /> */}
          <Route path="/projects" element={<AllProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;