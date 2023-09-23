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
    </div>
  )
}
