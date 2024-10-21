import React from "react";
import styles from "./loading.module.scss";

const Loading = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.loader} />
    </div>
  </div>
);

export default Loading;
