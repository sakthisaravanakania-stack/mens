import React from 'react'
import banner from "./banner.jpeg"

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-image'>
        <img src={banner} alt={banner} />
      </div>
      <div className='banner-container'>
        <p>NEW COLLECTION <i class="fa-regular fa-star"></i><i className="fa-solid fa-shirt"></i> <br />
        <h2>TRENDY T-SHIRTS <i className="fa-solid fa-palette"></i><i class="fa-solid fa-wand-magic-sparkles"></i></h2></p>
      </div>

      <div className='bannner-content'>
        <h5>Style For Every Mood Comfort For Every Day <i class="fa-solid fa-gift"></i></h5>
      </div>
    </div>
  )
}

export default Banner
