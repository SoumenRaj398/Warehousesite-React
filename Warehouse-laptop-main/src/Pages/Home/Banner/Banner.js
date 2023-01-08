import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../../images/banner1.jpg";
import banner from "../../../images/banner.jpg";
import banner2 from "../../../images/banner2.jpg";

const Banner = () => {
    return (
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Choose Your Best Laptop</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={banner}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Best Authentic Laptops are Here</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Use The Best Product in City</h3>
   
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;