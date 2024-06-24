// components/Footer.tsx

import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const iconSize = 25; // Customize the size here (in pixels)


const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto text-center  w-full">
        <div className="social-icons flex justify-center space-x-10 mb-4">
          <a href="/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={iconSize} />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={iconSize} />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={iconSize}/>
          </a>
          
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={iconSize} />
          </a>
        </div>
        <div className="footer-links flex justify-center space-x-8 mb-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/news" className="hover:underline">News</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
          <a href="/team" className="hover:underline">Our Team</a>
        </div>
        <div className="text-sm">
          Copyright ©2022; Designed by <span className="font-bold">FAHEEM</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
