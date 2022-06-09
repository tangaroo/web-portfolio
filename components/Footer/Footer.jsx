import styles from "./Footer.module.css";

export default function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.small}
        href="https://open.spotify.com/playlist/2fv2gGuK1nGWtnfY0qihEk?si=bf0b0cd306634eaf"
      >
        ♫ White Dawn, Glaring Noons
      </a>
      <p className={styles.small}>&copy; 2022</p>
    </footer>
  );
}
