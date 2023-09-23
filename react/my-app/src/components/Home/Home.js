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
          <h2 className='Hh'>SANKHYA</h2>
        </div>
        <p className='para'>At Sankhya, we're rewriting the business playbook. We're not just leveling the playing field; we're tilting it in your favor. Say goodbye to data disparities that only tech giants could afford. We're putting the same tools they use right at your fingertips, unlocking growth opportunities like never before.</p>
      </div>
      {showCards && <Cards />}
      {showFooter && <Footer />} 
    </>
  );
};

export default Home;
