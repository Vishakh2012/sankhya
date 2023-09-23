import React from 'react';
import './Cards.css'
import logo1 from '../../images/pngwing.png'
import logo2 from '../../images/lon.png'
import logo3 from '../../images/voice.jpg'



import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Cards() {
  return (
    <>
    <p className='heading'>Features</p>
    <div className='cardgrp'>
      
      <div className='d1'>
    <MDBCard>
      <MDBCardImage className='imgs' src={logo1} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>
          <br /><br />Data Empowerment</MDBCardTitle>
        <MDBCardText>
         <br />
        Empowering Small Businesses with Data Analytics: Unleash Your Potential!
        <br /><br />
        </MDBCardText>
        <MDBBtn href='#'>Know More</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>
    <div className='d2'>
    <MDBCard >
      <MDBCardImage className='imgs' src={logo2} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Business Boost</MDBCardTitle>
        <MDBCardText>
        Empowering small-scale entrepreneurs with affordable microloans, we pave the way for their business aspirations to thrive.</MDBCardText>
        <MDBBtn href='#'>Know More</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>
    <div className='d3'>
    <MDBCard>
      <MDBCardImage className='imgs' src={logo3} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Voice Revolution!</MDBCardTitle>
        <MDBCardText>

        Experience the Future of Interaction: Elevate Your Connection with Software Through Voice!</MDBCardText>
        <MDBBtn href='#'>Know More</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>
    
    </div>
    </>
  );
}