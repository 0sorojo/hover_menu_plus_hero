import React from 'react';
import computerImage from './images/Layer_2.svg';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Web Help for Small Businesses</h1>
          <h4>Take Your Business to Where Your Customers Are</h4>
          <button className='btn'>start now</button>
        </article>
        <article className='hero-images'>
          <img src={computerImage} alt='Make Money' className='phone-img' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
