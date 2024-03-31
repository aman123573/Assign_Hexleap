// src/components/Card.js
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Card.css';

const Card = ({ imageUrl, heading, gridElements }) => {
  const { theme } = useContext(ThemeContext);
  const totalEventsIndex = gridElements.findIndex((element) => element === 'Total events');
  const sportIndex = gridElements.findIndex((element) => element === 'Sport');

  return (
    <div className={`card ${theme === 'dark' ? 'card-dark' : 'card-light'}`}>
      <img src={imageUrl} alt="" className="w-auto h-auto rounded-t-lg" />
      <div className="card-content p-4">
        <h2 className="card-heading">{heading}</h2>
        <div className={`grid gap-4 info-container ${theme === 'dark' ? 'card-dark' : ''}`}>
          <div className="p-2">
            <div className="grid-item text-gray-600">
              {gridElements[totalEventsIndex]} {gridElements[sportIndex]}
            </div>
          </div>
          {gridElements.map((element, index) => (
            index !== totalEventsIndex && index !== sportIndex && (
              <div key={index} className="grid-item">
                {element}
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
