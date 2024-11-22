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
             src={dish1} alt="Dish 1" className="carousel-image" />
            alt="Dish 1"
            className="carousel-image"
        </div>
        <div>
          <img
            src="dish2.jpg"
            alt="Dish 2"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="dish3.jpg"
            alt="Dish 3"
            className="carousel-image"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
