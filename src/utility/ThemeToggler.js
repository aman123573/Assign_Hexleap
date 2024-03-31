// ThemeToggler.js
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './ThemeToggler.css'

const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    document.body.className = theme === 'dark' ? 'dark-theme' : '';

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>{theme}</p>
    </div>
  );
};

export default ThemeToggler;
