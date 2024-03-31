// src/components/Button.js
import React from 'react';
import './Button.css'

const Button = ({ text }) => {
  return (
    <button className="btn-see-more bg-blue-300 text-white px-4 py-2 rounded-md hover:bg-blue-400 focus:outline-none">
      {text}
    </button>
  );
};

export default Button;
