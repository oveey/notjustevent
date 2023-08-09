import React from 'react'
import './customers.css';
import { sarah, david, jessica, micheal, emily } from './imports.js';



const Customers = () => {
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


      <div className='comment'>
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

        <div className='comment-section2'>
          <p>The range of shoes available on this website is unmatched. I found exactly what I was
              looking for, and the prices are competitive. Great value for money. 
          </p>
          <div className='image2'>
            {<img src={emily} alt="Emily"/>}
          </div> 
        </div>

        <div className='comment-section3'>
          <p>I've never had such a seamless online shopping experience. The website is user-friendly, the checkout process is smooth, and the shoes arrived right on time. I'm impressed!. 
          </p>
          <div className='image3'>
            {<img src={sarah} alt="sarah"/>}
          </div> 
        </div>

        <div className='comment-section4'>
          <p>The range of shoes available on this website is unmatched. I found exactly what I was
              looking for, and the prices are competitive. Great value for money. 
          </p>
          <div className='image4'>
            {<img src={jessica} alt="Jessica"/>}
          </div> 
        </div>
      

      </div>

      <div className='comment-0'>

        <div className='comment-section-0'>
          <p>The range of shoes available on this website is unmatched. I found exactly what I was
            looking for, and the prices are competitive. Great value for money. 
          </p>
          <div className='image-0'>
            {<img src={jessica} alt="Jessica"/>}
          </div> 
        </div>

        <div className='comment-section-0'>
          <p>The range of shoes available on this website is unmatched. I found exactly what I was
            looking for, and the prices are competitive. Great value for money. 
          </p>
          <div className='image-0'>
            {<img src={jessica} alt="Jessica"/>}
          </div> 
        </div>

        <div className='comment-section-0'>
          <p>The range of shoes available on this website is unmatched. I found exactly what I was
            looking for, and the prices are competitive. Great value for money. 
          </p>
          <div className='image-0'>
            {<img src={jessica} alt="Jessica"/>}
          </div> 
        </div>

        <div className='comment-section-0'>
          <p>The range of shoes available on this website is unmatched. I found exactly what I was
            looking for, and the prices are competitive. Great value for money. 
          </p>
          <div className='image-0'>
            {<img src={jessica} alt="Jessica"/>}
          </div> 
        </div>

        <div className='comment-section-0'>
          <p>The range of shoes available on this website is unmatched. I found exactly what I was
            looking for, and the prices are competitive. Great value for money. 
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