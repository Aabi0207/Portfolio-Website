// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import SkillsTable from './components/Skills/SkillTable';

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <SkillsTable />
      {/* Other sections can go here */}
    </div>
  );
};

export default App;
