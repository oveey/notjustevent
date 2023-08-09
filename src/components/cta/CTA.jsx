import React from 'react'
import cta1 from '../../assets/cta1.png';
import cta2 from '../../assets/cta2.png';
import cta3 from '../../assets/cta3.png';
import cta4 from '../../assets/cta4.png';

import './cta.css';


const CTA = () => {
  return (
   <>
      <div className="cta section__padding" id="service">
        <div className="cta-content">
         <h1>Discover the Significance of Our Online Shoe Destination</h1>
         <p>Experience the Best of Both Worlds: Seamlessly Explore Our Website and App for Effortless and Stylish Footwear Shopping.</p>
        </div>
      </div>

      <div className="cta__section section__padding">
        {<img src={cta1} className="cta1" alt="cta1" />}

        <div className='cta__text'>
          <h6>A Plethora of Choices Await</h6>
          <p> Gain access to a vast array of shoes from various brands and styles, ensuring that you can find the perfect pair to suit your taste and needs.</p>
             
          <div className="cta__button">
            <button className='button3' type="button">Explore Now</button>
          </div>
        </div>

      </div>


      <div className="cta__section section__padding">

        <div className='cta__section1'>
          <div className='cta__text'>
            <h6>Personalized Recommendations</h6>
            <p> Benefit from personalized shoe recommendations based on your browsing history, preferences, and style, helping you discover new and exciting options tailored to your taste.</p>
             
            <div className="cta__button">
              <button className='button3' type="button">Explore Now</button>
            </div>

          </div>

          {<img src={cta2} className="cta2" alt="cta2" />}

        </div>

      </div>


      <div className="cta__section section__padding">
        {<img src={cta3} className="cta1" alt="cta3" />}

        <div className='cta__text'>
          <h6>Product Reviews and Ratings</h6>
          <p>Make informed purchase decisions by accessing genuine customer reviews and ratings for each shoe, giving you insights into the quality, fit, and comfort before making your selection.</p>
             
          <div className="cta__button">
            <button className='button3' type="button">Make informed choices</button>
          </div>
        </div>

      </div>

      <div className="cta__section section__padding">

        <div className='cta__section1'>
          <div className='cta__text'>
            <h6>Unparalleled Convenience</h6>
            <p>Discover the Boundless Benefits of Our App, Redefining the Way You Shop for Stylish Footwear with Unmatched Convenience.</p>
             
            <div className="cta__button">
              <button className='button3' type="button">Shop with ease</button>
            </div>

          </div>

          {<img src={cta4} className="cta2" alt="cta4" />}

        </div>

      </div>


     
    </>
  );
}

export default CTA;
