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
  const response=await fetch('/');
  const data=response.text();
}
    const jsonData = [
        {
          "item": "Product A",
          "quantity": 10,
          "profit": 500
        },
        {
          "item": "Product B",
          "quantity": 15,
          "profit": 750
        }
    ]
  return (
    <div className="App">
      <h1>Product V/S Quantity Purchased</h1>
      <BarChart data={jsonData} />
      <h1  className='reco's>Recommendations</h1>
      <div> <textarea id="myTextarea" name="myTextarea" readonly>{recommend()}</textarea>
      <button onClick={recommend}>Give me Recommendations</button></div>
      <div><textarea id="myTextarea" name="myTextarea" readonly>{recommend()}</textarea>
      <button onClick={recommend}>Give me Recommendations</button></div>
      
    </div>
  )
}
export default Analytics;
