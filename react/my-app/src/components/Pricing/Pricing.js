import React from 'react'
import './Pricing.css';

const Pricing = () => {
  return (
    <>
      <div className='prices'>
        <div>
          <h2>Sudhina Plan</h2>
          <h4>Rs 1 lakh </h4>
          <p>@ 4% / month for 1.5yrs</p>
        </div>
        <div className='details'>
          <button className='button-13'>Get Details</button>
        </div>
      </div>
      <div className='prices'>
        <div>
          <h2>Subhina Plan</h2>
          <h4>Rs 3 lakh </h4>
          <p>@ 4% / month for 3yrs</p>
        </div>
        <div className='details'>
          <button className='button-13'>Get Details</button>
        </div>
      </div>
      <div className='prices'>
        <div>
          <h2>Suvidha Plan</h2>
          <h4>Rs 5 lakh </h4>
          <p>@ 4% / month for 6yrs</p>
        </div>
        <div className='details'>
          <button className='button-13'>Get Details</button>
        </div>
      </div>
      <div className='prices'>
        <div>
          <h2>Yodhana Plan</h2>
          <h4>Rs 10 lakh </h4>
          <p>@ 4% / month for 12yrs</p>
        </div>
        <div className='details'>
          <button className='button-13'>Get Details</button>
        </div>
      </div>
    </>
  )
}

export default Pricing
