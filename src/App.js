// src/App.js
import React from 'react';
import Card from './components/Card';
import Button from './utility/Button';
import './App.css';
import Collection from './components/Collection';

import ThemeToggler from './utility/ThemeToggler';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const card1GridElements = ['Total events', '23 events', 'Sport', 'Football'];
  const card2GridElements = ['Total events', '17 events', 'Sport', 'Swimming'];

  return (
    <ThemeProvider>
      <div className='App'>
        <ThemeToggler />
        <div className="container mx-auto p-10">
          <h1 className="sports-heading text-2xl font-bold mb-4 ml-5">Sports</h1>
          <div className="card-container flex gap-4">
            <Card
              imageUrl="../image1.jpg"
              heading="Sacramento River Cats" // Heading for card 1
              gridElements={card1GridElements}
            />
            <Card
              imageUrl="../image2.jpeg"
              heading="Las Vegas Aviators" // Heading for card 2
              gridElements={card2GridElements}
            />
            <Card
              imageUrl="../image3.jpeg"
              heading="New Jersey Devils" // Heading for card 3
              gridElements={card2GridElements}
            />
            <Card
              imageUrl="../image4.jpeg"
              heading="Las Vegas Aviators" // Heading for card 4
              gridElements={card2GridElements}
            />
            <div className="card bg-white rounded-lg shadow-lg p-4">
              <img src="../image5.jpeg" alt="" className="w-full h-auto rounded-t-lg" />
              <div className="card-content p-4 text-center">
                <h2 className="card-heading text-xl font-semibold mb-2">Advertisement Title</h2>
                <p className="card-paragraph text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ea repellendus fuga totam quia sit soluta error asperiores, ab illo est pariatur architecto odio! In quam totam veritatis debitis animi.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6 button-container">
            <Button text="See More" />
          </div>
          <Collection />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
