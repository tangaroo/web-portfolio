import styles from "../styles/Components.module.css";
import tableData from "./data/links.json";

export default function TableComponent() {
  return tableData.map((data) => (
    // eslint-disable-next-line react/jsx-key
    <table className={styles.table}>
      <tr className={styles.row}>
        <th className={styles.title}>{data.heading}</th>
      </tr>
      {data.tableRows.map((tableRow) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <tr className={styles.row}>
            <td className={styles.cell}>{tableRow.number}</td>
            <td className={styles.td}>
              <a href={tableRow.url}>{tableRow.heading}</a>
            </td>
          </tr>
        );
      })}
    </table>
  ));
}
