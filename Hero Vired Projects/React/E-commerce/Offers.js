import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/Images/exclusive_image.png'

function Offers() {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY BEST SELLING PRODUCTS</p>
            <button>Check Now</button>
        </div>

        <div className='offers-right'>
            <img src={exclusive_image}/>
        </div>
    </div>
  )
}

export default Offers