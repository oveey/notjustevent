import React, { useEffect } from 'react';
import box from '../../assets/box.png';
import human from '../../assets/human.png';
import  AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { vans, jordan, nike, reebok, fila, adidas,puma } from './import.js';
import './header.css';



const Header= () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set your desired duration for animations
      once: false, // Animations will only occur once
      startEvent: 'DOMContentLoaded', // Trigger animations when the DOM is fully loaded
      offset: 100, // Adjust this value as needed


    });
  }, []);

  return (
    <div className="header section__padding" id="home" >
      <div className="header-content" >
        <h1 >Discover a Fresh <img src={box} className="box" alt="box" /> Shopping Experience </h1>
        <p>Indulge in a Paradigm Shift of Shoe Shopping: Embark on a Journey of Unparalleled Style, Unmatched Convenience, and Discover the Finest Footwear Selection Tailored Just for You.</p>

        <div className="header-button">
          <button className='button1' type="button">Checkout the app</button>
          <button className='button2' type="button">Continue to web</button>
        </div>

        <div className="header-content__human scale-up-center" >
          <img src={human}  alt="human"/>
        </div>
      </div>

      <div className="brand scale-up-center " id="brand">
        <div className="brand__content-container">
          <h1>Explore Our Premier Affiliated Brands</h1>
          <p>Discover an Exquisite Collection of Footwear from Top-notch Brands, Each Offering Unparalleled Quality, Style, and Craftsmanship.</p>

          <div className="brand-image " data-aos="fade-up" data-aos-duration="2000">
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

     
    </div>

  )
}

export default Header