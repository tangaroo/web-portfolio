import styles from "../styles/Components.module.css";

export default function CardwithDetails() {
  return (
    <div className={styles.card}>
      <p>
        I’m Cassandra <span className={styles.accent}>(forever happy)</span>{" "}
        Tang. <s>Avid traveller,</s> Font hoarder, type fanatic and master of
        auto layout. Ocassional writer for the{" "}
        <a href="https://medium.com/@typecass" target="_blank" rel="noreferrer">
          UX Collective
        </a>{" "}
        and I like all sorts of foods.
      </p>

      <p className={styles.space}>
        Currently at{" "}
        <a href="https://pleo.io/en" target="_blank" rel="noreferrer">
          Pleo
        </a>{" "}
        where I help simplify company expense management for accounting
        partners. Everything else can be found in my
        <a href="./CV_CassandraTang.pdf" download>
          {" "}
          resumé
        </a>
        .
      </p>

      <details className={styles.details}>
        <summary className={styles.summary}> </summary>
        <ul>
          <li>Full time hustling since 2018, based in Glasgow, Scotland.</li>
          <li>Now busy learning React and NextJS.</li>
          <li>
            Got a thing for lists and slightly wacky, conceptual projects.
          </li>
          <li>Latest WIP is this site and my capsule wardrobe.</li>
          <li>
            Anything else, <a href="mailto:hello@cassandratang.me">ask away</a>.
          </li>
        </ul>
      </details>
    </div>
  );
}
