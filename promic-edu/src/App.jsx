import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import the correct Speed Insights component for generic React applications
import { SpeedInsights } from '@vercel/speed-insights/react'; 

import HomePage from './HomePage';
import CoursePage from './CoursePage'; 
import ContactUs from './ContactUs'; 
import VipSignalsPage from './VipSignalsPage'; 
import './index.css';

function App() {
  return (
    <BrowserRouter>
      {/* The SpeedInsights component is placed here to monitor performance 
        globally across all routes in the application.
      */}
      <SpeedInsights />
      
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
