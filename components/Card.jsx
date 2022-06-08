import styles from "../styles/Components.module.css";

export default function Card({ content, display }) {
  return content.map((data) => (
    // eslint-disable-next-line react/jsx-key
    <div className={styles.card}>
      <p className={styles.accent}>{data.cardTitle}</p>
      {data.features.map((data) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <a
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

// import styles from "../styles/Components.module.css";
// export default function ContactSection({ content, display }) {
//   return (
//     <div className={styles.card}>
//       {content.map((data) => (
//         // eslint-disable-next-line react/jsx-key
//         <a
//           style={{ display: display }}
//           href={data.href}
//           target="_blank"
//           rel="noreferrer"
//         >
//           {data.label}
//         </a>
//       ))}
//     </div>
//   );
// }
