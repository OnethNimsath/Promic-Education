import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import CoursePage from './CoursePage'; // Assuming CoursePage.jsx is in the same directory
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
