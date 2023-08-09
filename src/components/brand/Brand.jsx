import React from 'react'
import './brand.css';
import { vans, jordan, nike, reebok, fila, adidas,puma } from './import.js';


const Brand = () => {
  return (
    <div className="brand" id="brand">
      <div className="brand__content-container">
        <h1>Explore Our Premier Affiliated Brands</h1>
        <p>Discover an Exquisite Collection of Footwear from Top-notch Brands, Each Offering Unparalleled Quality, Style, and Craftsmanship.</p>

        <div className="brand-image">
          {<img src={puma} />}
          {<img src={nike} />}
          {<img src={adidas} />}
          {<img src={fila} />}
          {<img src={jordan} />}
          {<img src={reebok} />}
          {<img src={vans} />}

        </div>
        
      </div>

     
    </div>
  )
}

export default Brand