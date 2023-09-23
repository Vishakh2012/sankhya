import React from 'react'
import logo from '../../Picture2.png';
import './home.css'
import Footer from '../Footer/Footer';


const Home = () => {
  return (
    <>
    <div className='fade-in'>
        <div className='jus-logo'>
             <img src={logo}alt='logo' className='image'/>
             <h2 className='Hh'>Sankhya</h2>
        </div>
    
    <p className='para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat officiis magnam tenetur rerum laboriosam earum magni tempora facilis voluptatibus repellendus molestiae provident nostrum eos quidem porro, eius eum perspiciatis cupiditate? </p>
    </div>
    <div>
        
    </div>
    <Footer />
    </>
  )
}

export default Home