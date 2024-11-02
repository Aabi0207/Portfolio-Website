// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      {/* Other sections can go here */}
    </div>
  );
};

export default App;
