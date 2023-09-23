import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function BarChart({ data }) {
    
    const svgRef = useRef();
  
    useEffect(() => {
      
      const jsonData = data;
  
      // Set up the dimensions and margins for the chart
      const margin = { top: 20, right: 30, bottom: 40, left: 40 };
      const width = 600 - margin.left - margin.right;
      const height = 400 - margin.top - margin.bottom;
  
      // Create the SVG container using the ref
      const svg = d3.select(svgRef.current)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
  
      // Define scales and axis
      const x = d3.scaleBand()
        .domain(jsonData.map(d => d.item))
        .range([0, width])
        .padding(0.1);
  
      const y = d3.scaleLinear()
        .domain([0, d3.max(jsonData, d => +d.profit)])
        .nice()
        .range([height, 0]);
  
      // Create bars
      svg.selectAll(".bar")
        .data(jsonData)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.item))
        .attr("width", x.bandwidth())
        .attr("y", d => y(+d.profit))
        .attr("height", d => height - y(+d.profit));
  
      // Add x-axis
      svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));
  
      // Add y-axis
      svg.append("g")
        .call(d3.axisLeft(y));
  
      // Add labels
      svg.append("text")
        .attr("x", width / 2)
        .attr("y", height + margin.top + 20)
        .attr("text-anchor", "middle")
        .text("Items");
  
      svg.append("text")
        .attr("x", -(height / 2))
        .attr("y", -margin.left)
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(-90)")
        .text("Profits");
    }, [data]);
  
    // Return the SVG container for rendering
    return (
      <svg ref={svgRef}></svg>
    );
  }
  
  export default BarChart;