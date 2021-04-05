import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1 class='one'>
        Hello, I'm AHMED
        </h1>

        <h1 class='two'>
          HANIF
        </h1>

      <p>Product and Website designer </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          About
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Contact <i className='far fa-phone' aria-hidden="true"></i> 
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;