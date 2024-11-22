import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="aboutus-container">
      <h1 className="aboutus-title">About Us</h1>
      <div className="aboutus-content">
        <div className="aboutus-images">
          <img src="/images/restaurant1.jpg" alt="Italian Restaurant" className="aboutus-image aboutus-image-left" />
          <img src="/images/restaurant2.jpg" alt="Delicious Food" className="aboutus-image aboutus-image-right" />
        </div>
        <div className="aboutus-text">
          <p>
            Welcome to <strong>AL ITALIA</strong>, where every meal is a celebration of the rich and vibrant culinary traditions of Italy. Nestled in the heart of our city, our restaurant has been delighting guests with authentic Italian flavors, warm hospitality, and a cozy ambiance since our inception.
          </p>
          <p>
            Our chefs craft each dish with passion, using the finest and freshest ingredients sourced locally and imported directly from Italy. From our wood-fired pizzas and handmade pastas to our classic Tiramisu and extensive wine collection, every item on our menu tells a story of authenticity and excellence.
          </p>
          <p>
            At <strong>AL ITALIA</strong>, we believe dining is not just about food—it's about creating memories. Whether you're enjoying a romantic dinner, hosting a family celebration, or gathering with friends, our team is dedicated to making your experience unforgettable.
          </p>
          <p>
            Step into our restaurant, and let the flavors of Italy transport you to a world of culinary delight. From the bustling streets of Rome to the serene vineyards of Tuscany, we bring the essence of Italy to your table.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
