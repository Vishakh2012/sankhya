// BarChart.js

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data, width, height }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const margin = { top: 20, right: 20, bottom: 40, left: 40 }; // Define margins

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.item))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.quantity)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg.selectAll('*').remove(); // Clear existing elements

    svg
      .attr('width', width)
      .attr('height', height)
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => xScale(d.item))
      .attr('y', (d) => yScale(d.quantity))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => height - margin.bottom - yScale(d.quantity))
      .attr('fill', (d, i) => (i % 2 === 0 ? 'red' : i % 3 === 0 ? 'green' : 'yellow'));

    // X-axis
    svg
      .append('g')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(xScale))
      .selectAll('text')
      .style('text-anchor', 'middle')
      .attr('transform', 'rotate(0)');

    // Y-axis
    svg
      .append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale));

    // X-axis label
    svg
      .append('text')
      .attr('x', width / 2)
      .attr('y', height)
      .attr('dy', margin.bottom / 2)
      .style('text-anchor', 'middle')
      .text('Products');

    // Y-axis label
    svg
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -height / 2)
      .attr('y', 0)
      .attr('dy', -margin.left / 2)
      .style('text-anchor', 'middle')
      .text('Quantity');
  }, [data, width, height]);

  return <svg ref={svgRef}></svg>;
};

export default BarChart;
