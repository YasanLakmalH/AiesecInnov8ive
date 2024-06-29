import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const iconSize = 25; // Customize the size here (in pixels)

const Footer = () => {
  return (
    <footer className="text-center py-4">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-8 mb-4">
          {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, index) => (
            <a key={index} href="/" target="_blank" rel="noopener noreferrer">
              <Icon size={iconSize} />
            </a>
          ))}
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          {['Home', 'News', 'About', 'Contact Us', 'Our Team'].map((text, index) => (
            <a key={index} href={`/${text.replace(' ', '').toLowerCase()}`} className="hover:underline">
              {text}
            </a>
          ))}
        </div>
        <div className="text-sm">
          ©2022 Designed by <span className="font-bold">4inevetive</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
