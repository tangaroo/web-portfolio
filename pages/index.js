import styles from '../styles/Home.module.css'

import { useState, useEffect } from 'react'

import ContactData from '../components/data/contact.json'
import FeaturesData from '../components/data/features.json'

import HeadComponent from '../components/Head.jsx'
import HeaderComponent from '../components/Header.jsx'
import Clock from '../components/Clock.jsx'
import CardwithDetails from '../components/CardwithDetails.jsx'
import Card from '../components/Card.jsx'
import TableComponent from '../components/Table.jsx'
import FooterComponent from '../components/Footer.jsx'

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
      <HeadComponent />
      <main className={styles.main} data-theme={theme}>
          <div className={styles.content}>
      <HeaderComponent />
      <div className={styles.info}>
        <Clock />
            <button className={styles.button} onClick={themeToggle}>
              {" "}
              {theme === "light" ? "dark" : "light"}
            </button>
      </div>
        <CardwithDetails />
        <Card
            content={ContactData}
            display="block"
          />
          <TableComponent />
         <Card
            content={FeaturesData}
            display="inline"
          />
        
        <FooterComponent/>
        </div>
        </main>
      </>
  )
}
