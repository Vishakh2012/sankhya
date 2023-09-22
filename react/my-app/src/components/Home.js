import React from 'react'
import logo from '../Picture1.png';
import './home.css'


const Home = () => {
  return (
    <>
    <div className='fade-in'>
    <img src={logo}alt='logo' className='image'/>
    <h2 className='Hh'>Sankhya</h2>
    <p className='para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat officiis magnam tenetur rerum laboriosam earum magni tempora facilis voluptatibus repellendus molestiae provident nostrum eos quidem porro, eius eum perspiciatis cupiditate? </p>
    </div>
    </>
  )
}

export default Home