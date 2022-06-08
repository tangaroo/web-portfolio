import styles from "../styles/Components.module.css";
import moment from "moment-timezone";
import { useState } from "react";

export default function Clock() {
  const nowUK = moment().tz("Europe/London").format("hh:mmA");

  const [time, setTime] = useState(nowUK);

  setInterval(() => {
    setTime(moment().tz("Europe/London").format("hh:mmA"));
  }, 60000);

  return <p className={styles.small}>Glasgow, {time}</p>;
}
