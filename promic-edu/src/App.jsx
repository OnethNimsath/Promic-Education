import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import CoursePage from './CoursePage'; // Assuming CoursePage.jsx is in the same directory
import ContactUs from './ContactUs'; // Import the new ContactUs component
import VipSignalsPage from './VipSignalsPage'; // Import the new VipSignalsPage component
import './index.css';

function App() {
  return (
    <BrowserRouter>
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