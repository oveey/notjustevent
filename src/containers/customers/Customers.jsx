import React, { useEffect } from 'react';
import './customers.css';
import  AOS from 'aos';
import 'aos/dist/aos.css'; 
import { sarah, david, jessica, micheal, emily } from './imports.js';




const Customers = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000, // Set your desired duration for animations
      once: false, // Animations will only occur once
      startEvent: 'DOMContentLoaded', // Trigger animations when the DOM is fully loaded
      offset: 100, // Adjust this value as needed
      
    });
  }, []);

  return (
    <div className="customer section__padding" id="home">
      <div className="customer-content">
        <h1>Discover the Stories of Delighted Customers </h1>
        <p>Explore the heartfelt testimonials and reviews shared by our valued customers, showcasing their delightful experiences with our top-notch products and outstanding service.</p>

        <div className="content section_padding">
          <div className='content-number1'>
            <h4>260k+</h4>
            <p>Customers</p>
          </div>

          <div className='content-number1'>
            <h4>300k+</h4>
            <p>Store</p>
          </div>

          <div className='content-number1'>
            <h4>2Mk+</h4>
            <p>Orders</p>
          </div>
          
        </div>

        
         

      </div>


      <div className='comment' data-aos="zoom-out">
        <div className='comment-section'>
          <p>The range of shoes available on this website is unmatched. I found exactly what I was
              looking for, and the prices are competitive. Great value for money. 
          </p>
          <div className='image'>
            {<img src={micheal} alt="Micheal"/>}
          </div> 
        </div>

        <div className='comment-section1'>
          <p>The customer service I received was outstanding. They went above and beyond to ensure my satisfaction. The quality of the shoes is excellent too. Will definitely be a returning customer!. 
          </p>
          <div className='image1'>
            {<img src={david} alt="David"/>}
          </div> 
        </div>

        <div className='comment-section2' >
          <p>I am absolutely in love with the shoes I purchased from this website! They are not only stylish but also incredibly comfortable. Highly recommended!
          </p>
          <div className='image2'>
            {<img src={emily} alt="Emily"/>}
          </div> 
        </div>

        <div className='comment-section3' >
          <p>I've never had such a seamless online shopping experience. The website is user-friendly, the checkout process is smooth, and the shoes arrived right on time. I'm impressed!. 
          </p>
          <div className='image3'>
            {<img src={sarah} alt="sarah"/>}
          </div> 
        </div>

        <div className='comment-section4' >
          <p>The shoes I ordered exceeded my expectations. The craftsmanship and attention to detail are remarkable. I feel like I'm walking on clouds!
          </p>
          <div className='image4'>
            {<img src={jessica} alt="Jessica"/>}
          </div> 
        </div>
      

      </div>

      {/***************** For mobile screen ****************/}

      <div className='comment-0'>

        <div className='comment-section-0'>
          <p>The range of shoes available on this website is unmatched. I found exactly what I was
            looking for, and the prices are competitive. Great value for money. 
          </p>
          <div className='image-0'>
            {<img src={micheal} alt="Micheal"/>}
          </div> 
        </div>

        <div className='comment-section-0'>
          <p>TThe customer service I received was outstanding. They went above and beyond to ensure my satisfaction. The quality of the shoes is excellent too. Will definitely be a returning customer!
          </p>
          <div className='image-0'>
            {<img src={david} alt="David"/>}
          </div> 
        </div>

        <div className='comment-section-0'>
          <p>I am absolutely in love with the shoes I purchased from this website! They are not only stylish but also incredibly comfortable. Highly recommended!
          </p>
          <div className='image-0'>
            {<img src={emily} alt="Emily"/>}
          </div> 
        </div>

        <div className='comment-section-0'>
          <p>I've never had such a seamless online shopping experience. The website is user-friendly, the checkout process is smooth, and the shoes arrived right on time. I'm impressed!. </p>
          <div className='image-0'>
            {<img src={sarah} alt="Sarah"/>}
          </div> 
        </div>

        <div className='comment-section-0'>
          <p>The shoes I ordered exceeded my expectations. The craftsmanship and attention to detail are remarkable. I feel like I'm walking on clouds! 
          </p>
          <div className='image-0'>
            {<img src={jessica} alt="Jessica"/>}
          </div> 
        </div>





        


      </div>



    
      
     
    </div>

  )
}

export default Customers