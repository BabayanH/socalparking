import React from "react";
import styles from "./style";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}></div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}></div>
  </div>
);

export default App;
