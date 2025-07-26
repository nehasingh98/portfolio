import React from 'react';
import { Link } from 'react-router-dom';

import './AboutMe.css';
import mypic from '../../assets/mypic.jpeg'

import {images} from '../../constants'
import Button from '../../components/Button/Button';

const AboutMe = () => (
  <div className='cv__aboutme'>
    <div className='cv__aboutme-placeholder_rect'></div>
    <div className='cv__aboutme-placeholder'>
      <div className='cv__aboutme-placeholder_about'>
        <div className='cv__aboutme-placeholder_about-header'>
          <img src={mypic} alt="my-pic" />
          <h1>Neha Singh</h1>
          <div className='cv__aboutme-placeholder_about-line'></div>
          <p>PGDM Student</p>
          <p>Goa Institute of Management</p>
        </div>
        <div className='cv__aboutme-placeholder_about-footer'>
          <ul className='cv__aboutme-placeholder_about-footer_social'>
            <li><a href='https://www.linkedin.com/in/neha-singh-572763192/' target="_blank" rel="noreferrer noopener"><img src={images.linkedin} alt="li" className='social-media'/></a></li>
          </ul>
        </div>
      </div>
    </div>

    <div className='cv__aboutme-description'>
      <h1>Hello</h1>
      <h3>Here's who I am & what I do</h3>
      <div className='cv__aboutme-description_buttons'>
        <Link to='/resume'><Button name='RESUME' className='resume' textColor='#ffffff' backgroundColor='#8a2be2' borderColor='#725AC1' boxShadowColor='#725AC1' hoverTextColor='#725AC1' hoverBoxShadowColor='#ffffff'  /></Link>
        <Link to='/experience'><Button name='EXPERIENCE' className='experience' textColor='#725AC1' borderColor='#725AC1' boxShadowColor='#725AC1' hoverTextColor='#FFFFFF' hoverBoxShadowColor='#8a2be2'  /></Link>
      </div>
      <p>With 3+ years of experience working with Fortune 500 clients at Oracle, I bring a unique blend of technical precision and business strategy. Now pursuing my PGDM at Goa Institute of Management, I specialize in marketing, digital campaigns, and data-driven storytelling. From leading ₹5 crore marketing pitches to mentoring teams and securing ₹10 lakh sponsorships, I thrive at the intersection of innovation, leadership, and customer insight.</p>
    </div>
  </div>
);

export default AboutMe;
