import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Removed: import { HelmetProvider } from 'react-helmet-async'; 
import { SpeedInsights } from '@vercel/speed-insights/react'; 

import HomePage from './HomePage';
import CoursePage from './CoursePage'; 
import ContactUs from './ContactUs'; 
import VipSignalsPage from './VipSignalsPage'; 
import './index.css';

function App() {
  return (
    <BrowserRouter>
      {/* SpeedInsights loads globally outside of specific contexts */}
      <SpeedInsights />
      
      {/* The HelmetProvider wrapper has been removed as the associated library was uninstalled for deployment stability. */}
      <div className="App">
        <Routes>
          {/* Route for the Home Page */}
          <Route path="/" element={<HomePage />} />
          
          {/* Route for the new Course Page */}
          <Route path="/courses" element={<CoursePage />} />
          
          {/* Route for the new Contact Us Page */}
          <Route path="/contact" element={<ContactUs />} />
          
          {/* NEW Route for VIP Signals Page */}
          <Route path="/vip-signals" element={<VipSignalsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
