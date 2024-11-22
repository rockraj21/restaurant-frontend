import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img
            src="/images/dish1.jpg"
            alt="Dish 1"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="/images/dish2.jpg"
            alt="Dish 2"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="/images/dish3.jpg"
            alt="Dish 3"
            className="carousel-image"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
