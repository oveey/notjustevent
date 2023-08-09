import React from 'react'
import box from '../../assets/box.png';
import human from '../../assets/human.png';


import './header.css';



const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1>Discover a Fresh <img src={box} className="box" /> Shopping Experience </h1>
        <p>Indulge in a Paradigm Shift of Shoe Shopping: Embark on a Journey of Unparalleled Style, Unmatched Convenience, and Discover the Finest Footwear Selection Tailored Just for You.</p>

        <div className="header-button">
          <button className='button1' type="button">Checkout the app</button>
          <button className='button2' type="button">Continue to web</button>
        </div>

        <div className="header-content__human section_padding">
          <img src={human} className="human" />
        </div>
      </div>

     
    </div>

  )
}

export default Header