import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode('isdark');
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Soccer players</h1>
      <div className="dark-mode__toggle">
        <button onClick={toggleMode}
          >
          Go Dark
          </button>
        
      </div>
    </nav>
  );
};

export default Navbar;