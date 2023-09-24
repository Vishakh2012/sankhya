import React from 'react'
import { useState,useEffect } from 'react'
import './Analytics.css'
import BarChart from './Barchart' 
export const Analytics = () => {
    // useEffect(()=>{
    //     const graph = async()=>{
    //         const response = await fetch('')
    //         const result = response.json();
    //     }
    // },[])
async function recommend(){
  const textarea = document.getElementById('input');
  const submitButton = document.getElementById('sub');
  const responseContainer = document.getElementById('response-container'); 

  submitButton.addEventListener('click', async () => {
    // Get the text entered in the textarea and store it in the variable
    textValue = textarea.value;
  
  const response = await fetch('http://localhost:8000/', {
      mode : 'cors',
      method: 'POST',
      body: JSON.stringify({ text: textValue }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  const data =await response.text();
  responseContainer.innerHTML = data;
  });
}
async function recommend1(){
  const response1 =await fetch('http://localhost/8000');
  //const data1 =response1.text();
}

    const jsonData = [
        {
          "item": "Sugar",
          "quantity": 10,
          "units": "kg"
        },
        {
          "item": "Maida",
          "quantity": 15,
          "units": "kg"
        }
    ]

  const screenWidth = window.innerWidth;
  const chartWidth = screenWidth > 768 ? 400 : screenWidth - 32; // Adjust as needed
  const chartHeight = 300;
  return (
    <div className="App">
      <h1>Product V/S Quantity Purchased</h1>
      <div className="chart-container">
      <BarChart data={jsonData} width={chartWidth} height={chartHeight} />
      </div>
      <h1  className='reco'>Recommendations</h1>
      <div className='text'>
  <textarea className="myTextarea" readOnly id='response-container'></textarea>
  <button onClick={recommend1} className='button'  href="/random_sug/">Give me Recommendations</button>
</div>
<div className='text'>
  <textarea className="myTextarea1" id='input'></textarea>
  <button onClick={recommend}  className='button' id='sub'href='get_insights'>Submit</button>
</div>

    </div>
  )
}
export default Analytics;
