import styles from '../styles/Home.module.css'

import { useState, useEffect } from 'react'

import ContactData from '../components/data/contact.json'
import FeaturesData from '../components/data/features.json'

import SEO from '../components/Head.jsx'
import Header from '../components/Header/Header.jsx'
import Clock from '../components/Clock/Clock.jsx'
import Bio from '../components/Bio/Bio.jsx'
import Card from '../components/Card/Card.jsx'
import Table from '../components/Table/Table.jsx'
import Footer from '../components/Footer/Footer.jsx'

export default function Home() {
  const [theme, setTheme] = useState("");
  const themeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.cookie = `theme=${newTheme}`;
  };

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const storedTheme = document.cookie;

    if (storedTheme.length === 0) {
      document.cookie = `theme=${prefersDark ? "dark" : "light"}`;
      setTheme(prefersDark ? "dark" : "light");
    } else {
      const parsedCookie = storedTheme.replace("theme=", "");
      setTheme(parsedCookie);
    }
  }, []);

  return (
      <>
      <SEO />
      <main className={styles.main} data-theme={theme}>
      <div className={styles.content}>
      <Header />
      <div className={styles.info}>
        <Clock />
            <button className={styles.button} onClick={themeToggle}>
              {" "}
              {theme === "light" ? "dark" : "light"}
            </button>
      </div>
        <Bio />
        <Card
            content={ContactData}
            display="block"
          />
          <Table />
         <Card
            content={FeaturesData}
            display="inline"
          />
        
        <Footer/>
        </div>
        </main>
      </>
  )
}
