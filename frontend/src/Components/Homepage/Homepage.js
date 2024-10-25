import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import './Homepage.css'; // Add styles for the homepage

const Homepage = () => {
  return (
    <div className="homepage">
      
      <ImageSlider />
      
      <div className="category">
        <Link to="/lipsticks">
          <img src="/lp3.jpg" alt="Lipsticks" className="category-image" />
          <h2 className="category-title">Lipsticks</h2>
        </Link>
      </div>
      <div className="category">
        <Link to="/makeupkits">
          <img src="/MK3.jpg" alt="Makeupkits" className="category-image" />
          <h2 className="category-title">Makeup kits</h2>
        </Link>
      </div>
      
    </div>
  );
};

export default Homepage;
