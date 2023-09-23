import React, { useState, useEffect } from 'react';
import logo from '../../Picture2.png';
import './home.css';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';

const Home = () => {

  const [showCards, setShowCards] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  const handleScroll = () => {
    
    if (window.scrollY > 200) {
      setShowCards(true);
    }
    if (window.scrollY > 400) {
      setShowFooter(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='fade-in'>
        <div className='jus-logo'>
          <img src={logo} alt='logo' className='image' />
          <h2 className='Hh'>Sankhya</h2>
        </div>

        <p className='para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat officiis magnam tenetur rerum laboriosam earum magni tempora facilis voluptatibus repellendus molestiae provident nostrum eos quidem porro, eius eum perspiciatis cupiditate? </p>
      </div>
      {showCards && <Cards />}
      {showFooter && <Footer />} 
    </>
  );
};

export default Home;
