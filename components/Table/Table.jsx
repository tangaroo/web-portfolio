import styles from "./Table.module.css";
import tableData from "../data/links.json";

export default function TableComponent() {
  return tableData.map((data, i) => (
    <table className={styles.table} key={`table-${i}`}>
      <tr className={styles.row}>
        <th className={styles.title}>{data.heading}</th>
      </tr>
      {data.tableRows.map((tableRow, i) => {
        return (
          <tr className={styles.row} key={`tableRow-${i}`}>
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
