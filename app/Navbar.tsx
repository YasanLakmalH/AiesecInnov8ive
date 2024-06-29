"use client";

import React, { useState } from 'react';

const Navbar = (): JSX.Element => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-white">
              Logo
            </a>
          </div>
          <div className="flex-grow text-center">
            <span className="text-white text-xl">CelonYummy</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
              SignIn
            </a>
            <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
              SignUp
            </a>
          </div>
          <div className="md:hidden">
            <button
              className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-white hover:bg-white hover:text-black block rounded-lg p-2">
              SignIn
            </a>
            <a href="/" className="text-white hover:bg-white hover:text-black block rounded-lg p-2">
              SignUp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
