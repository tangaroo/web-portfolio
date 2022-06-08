import styles from "./Card.module.css";

export default function Card({ content, display }) {
  return content.map((data, i) => (
    <div className={styles.card} key={`card-${i}`}>
      <p className={styles.accent}>{data.cardTitle}</p>
      {data.features.map((data, i) => {
        return (
          <a
            key={`content-${i}`}
            style={{ display: display }}
            href={data.href}
            target="_blank"
            rel="noreferrer"
          >
            {data.label}
          </a>
        );
      })}
    </div>
  ));
}
