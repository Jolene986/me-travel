import React from 'react';

import logo from '../images/logo-white.png';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaBlenderPhone } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';

import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa';
import { navLinks } from './Navbar';

const Footer = () => {
  return (
    <footer>
      <div className='footer-distributed'>
        <div className='footer-left'>
          <img src={logo} alt='MA tavellogo' />
          <div className='footer-links'>
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>
          <p className='footer-company-name'>MA Travel © 2421</p>
        </div>
        <div className='footer-center'>
          <h3>Contact us</h3>

          <div className='footer-contact-icons'>
            <div>
              <FaMapMarkerAlt className='footer-icon' />
              <p>
                <span>444 S. Cedros Ave</span> Solana Beach, California
              </p>
            </div>
            <div>
              <FaBlenderPhone className='footer-icon' />
              <p>
                <a href='tel:+381555555'>++421 999 999</a>
              </p>
            </div>
            <div>
              <FaTelegramPlane className='footer-icon' />
              <p>
                <a href='mailto:office@metravel.com'>office@matravel.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className='footer-right'>
          <h3>About us</h3>
          <p className='footer-company-about'>
            ME Travel is an interstellar company specialising in planetary
            exploration and colonisation. In addition to funding the
            establishment of several human colonies, we secured resource rights
            to worlds that may have undiscovered resources or remnants of alien
            technology. You can travel safe with us and descover new worlds, and
            revisit the old ones.
          </p>
        </div>
      </div>

      <div className='footer-icons'>
        <hr />
        <div>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/Jolene986'
          >
            <FaGithubSquare className='footer-icon' />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/jovana-jovanovic-dev/'
          >
            <FaLinkedin className='footer-icon' />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://twitter.com/'
          >
            <FaTwitterSquare className='footer-icon' />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.facebook.com/'
          >
            <FaFacebookSquare className='footer-icon' />
          </a>
        </div>
      </div>
      <div className='copyw'>
        <FaRocket id='squear' />
        <div id='container'>
          <h3>
            Developed with <span>&#10084;</span> by Jolene
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
