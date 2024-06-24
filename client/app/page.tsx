"use client"; // Add this directive at the top if you are using hooks

import React from 'react';
import Image from "next/image";
import styles from "../styles/page.module.css";
import Navbar from "./HomePageNavbar";
import Footer from './footer';

const Page = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <div>Home</div>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer> 
    </div>
  );
};

export default Page;
