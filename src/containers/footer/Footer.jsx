import React, { useEffect } from 'react';
import './footer.css';
import footer from '../../assets/footer.png';
import logo2 from '../../assets/Logo2.png';
import  AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles





const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Set your desired duration for animations
      once: false, // Animations will only occur once
      startEvent: 'DOMContentLoaded', // Trigger animations when the DOM is fully loaded
      offset: 120, // Adjust this value as needed


    });
  }, []);

  return (
    <div className="footer section__padding" id="home">
      <div className="footer-content">
        <h1>Get Started Today </h1>
        <p>Embark on your sneaker journey with SteezyKicks. Discover the latest trends, browse our extensive collection, and find the perfect pair that matches your style. Start exploring our exceptional footwear selection and elevate your sneaker game today.</p>


        <div className="footer" data-aos="fade-up" data-aos-duration="3000">
          <img src={footer} className="footer-image" alt="footer" />
        </div>

        <div className='footer2'>
          <div className='footer-logo'>
           { <img src={logo2} className="footer-image1"  alt="logo2" /> }
           <p> © Steezykicks</p>

          </div>

          <div className='footer3'>
            <p><a className='head' href="#home">Home</a></p>
            <p><a href="#service">Featured product</a></p>
            <p><a href="#about">New arrivals</a></p>
            <p><a href="#brand">Best sellers</a></p>
            <p><a href="#brand">Sale items</a></p>
            <p><a href="#brand">Customer reviews</a></p>
          </div>

          <div className='footer3'>
            <p><a className='head' href="#home">How it works</a></p>
            <p><a href="#service">Order placement</a></p>
            <p><a href="#about">Payment option</a></p>
            <p><a href="#brand">Shipping and delivery</a></p>
            <p><a href="#brand">Returns and Exchanges</a></p>
            <p><a href="#brand">Frequently asked questions</a></p>
          </div>

          <div className='footer3'>
            <p><a className='head' href="#home">About</a></p>
            <p><a href="#service">Company overview</a></p>
            <p><a href="#about">Our team</a></p>
            <p><a href="#brand">Mission and values</a></p>
            <p><a href="#brand">Customer Testimonial</a></p>
            <p><a href="#brand">Contact Information</a></p>
          </div>

          <div className='footer3'>
            <p><a className='head' href="#home">Service</a></p>
            <p><a href="#service">Shoe customization</a></p>
            <p><a href="#about">Shoe repair</a></p>
            <p><a href="#brand">Personal styling</a></p>
            <p><a href="#brand">Sneaker Cleaning</a></p>
            <p><a href="#brand">Gift Cards</a></p>
          </div>




        </div>

        
      </div>

     
    </div>

    
  )
}

export default Footer