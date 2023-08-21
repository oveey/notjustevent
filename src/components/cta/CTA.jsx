import React, { useEffect } from 'react';
import cta1 from '../../assets/cta1.png';
import cta2 from '../../assets/cta2.png';
import cta3 from '../../assets/cta3.png';
import cta4 from '../../assets/cta4.png';
import  AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './cta.css';


const CTA = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Set your desired duration for animations
      once: false, // Animations will only occur once
      startEvent: 'DOMContentLoaded', // Trigger animations when the DOM is fully loaded
      offset: 120, // Adjust this value as needed


    });
  }, []);

  return (
    <div className="cta section__padding" id="service" >
      <div className="cta-content" data-aos="fade-up" data-aos-anchor-placement="top-center">
        <h1>Discover the Significance of Our Online Shoe Destination</h1>
        <p>Experience the Best of Both Worlds: Seamlessly Explore Our Website and App for Effortless and Stylish Footwear Shopping.</p>
      </div>

      <div className="cta__section">
       {<img src={cta1} alt="cta1" data-aos="fade-right"  />}

        <div className='cta__text'>
          <h1>A Plethora of Choices Await</h1>
          <p> Gain access to a vast array of shoes from various brands and styles, ensuring that you can find the perfect pair to suit your taste and needs.</p>
             
          <div className="cta__button">
           <button type="button">Explore Now</button>
          </div>
        </div>

      </div>
      <div className="cta__section1">
        <div className='cta__text'>
          <h1>Personalized Recommendations</h1>
          <p>Experience the Best of Both Worlds: Seamlessly Explore Our Website and App for Effortless and Stylish Footwear Shopping.</p>
             
          <div className="cta__button">
           <button type="button">Explore Now</button>
          </div>
        </div>

        {<img src={cta2} className="cta2" alt="cta2" data-aos="fade-left" />}


      </div>

      <div className="cta__section">
       {<img src={cta3} className="cta1" alt="cta3" data-aos="fade-right"  />}

        <div className='cta__text'>
          <h1>A Plethora of Choices Await</h1>
          <p> Benefit from personalized shoe recommendations based on your browsing history, preferences, and style, helping you discover new and exciting options tailored to your taste.</p>
             
          <div className="cta__button">
           <button type="button">Explore Now</button>
          </div>
        </div>

      </div>

      <div className="cta__section1">
        <div className='cta__text'>
         <h6>Unparalleled Convenience</h6>
          <p>Discover the Boundless Benefits of Our App, Redefining the Way You Shop for Stylish Footwear with Unmatched Convenience.</p>
             
          <div className="cta__button">
           <button type="button">Explore Now</button>
          </div>
        </div>

        {<img src={cta4} className="cta2" alt="cta4" data-aos="fade-left" />}


      </div>

      
    </div>

    

   


  );

}

export default CTA;
