import React, { useState } from 'react'
import './Pricing.css';
import { Submit } from './Submit';

const Pricing = () => {
  const [submission,setSubmission] = useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault();
    setSubmission(true);
  }

  return (
    <>
 {
  !submission &&
      <form className='forms' onSubmit={handleSubmit}>
      <div className='fields'>
          
          <label>Amount Required</label>
          <input></input>

        </div>
        <div className='fields'>
          
          <label>Time Period</label>
          <input></input>
        
        </div>
        <div className='fields'>
          
          <label>Reason for the loan</label>
        
          <input></input>
          
        </div>
        <button  >Submit</button>
      </form>
}
      {submission && <Submit />}
    
    </>
  )
}

export default Pricing
