import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // REQUIRED for <Helmet> components
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
      
      {/* HelmetProvider MUST wrap any component that uses the <Helmet> tag 
          (which includes all your page components: HomePage, CoursePage, etc.) 
      */}
      <HelmetProvider>
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
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
