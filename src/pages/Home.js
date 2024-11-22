import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Home.css';
import Carousel from '../components/Carousel'; // Ensure the Carousel component is implemented

function Home() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>AL ITALIA</h1>
          <h3>#SIMPLYAUTHENTIC</h3>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate('/reservations')}>
              Reservations
            </button>
            <button className="btn-secondary" onClick={() => navigate('/order')}>
              Order Now
            </button>
          </div>
        </div>
      </section>

      {/* Chef Recommendations */}
      <section className="chef-recommendations">
        <h2>Chef Recommends</h2>
        <Carousel />
      </section>

      {/* Our Journey */}
      <section className="our-journey">
        <div className="journey-text">
          <h2>Our Journey</h2>
          <p>
          Welcome to AL ITALIA, where every meal is a celebration of the rich and vibrant culinary traditions of Italy. Nestled in the heart of our city, our restaurant has been delighting guests with authentic Italian flavors, warm hospitality, and a cozy ambiance since our inception.
          </p>
          <a href="/about-us" className="read-more">
            Read More
          </a>
        </div>
        <div className="journey-image">
          <img src="images/journey.jpg" alt="Our Journey" />
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Count on Us</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <i className="icon">🍷</i>
            <p>Exquisite Ambience</p>
          </div>
          <div className="feature-item">
            <i className="icon">🍝</i>
            <p>Authentic Cuisine</p>
          </div>
          <div className="feature-item">
            <i className="icon">⭐</i>
            <p>Impeccable Service</p>
          </div>
          <div className="feature-item">
            <i className="icon">🏢</i>
            <p>Corporate Friendly</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
