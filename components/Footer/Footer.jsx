import styles from "./Footer.module.css";

export default function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <p className={styles.small}>Last updated 5 June 2022</p>
      <p className={styles.small}>&copy; 2022</p>
    </footer>
  );
}
