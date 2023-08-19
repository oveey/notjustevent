import React, { useEffect } from 'react';
import  AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './brand.css';
import { vans, jordan, nike, reebok, fila, adidas,puma } from './import.js';


const Brand = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000, // Set your desired duration for animations
      once: false, // Animations will only occur once
      startEvent: 'DOMContentLoaded', // Trigger animations when the DOM is fully loaded
      offset: 500, // Adjust this value as needed


    });
  }, []);
  return (
    <div className="brand" id="brand">
      <div className="brand__content-container">
        <h1>Explore Our Premier Affiliated Brands</h1>
        <p>Discover an Exquisite Collection of Footwear from Top-notch Brands, Each Offering Unparalleled Quality, Style, and Craftsmanship.</p>

        <div className="brand-image" data-aos="fade-up" data-aos-duration="1000">
          {<img src={puma} alt="puma"/>}
          {<img src={nike} alt="nike"/>}
          {<img src={adidas} alt="adidas" />}
          {<img src={fila} alt="fila" />}
          {<img src={jordan} alt="jordan"/>}
          {<img src={reebok} alt="reebok" />}
          {<img src={vans} alt="vans" />}

        </div>
        
      </div>

     
    </div>
  )
}

export default Brand