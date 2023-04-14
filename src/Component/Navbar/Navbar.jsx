import React from "react";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <h4>BMX</h4>
      <h4>Mountain</h4>
      <h4>Road</h4>
      <h4>Track</h4>
    </div>
  );
};

export default Navbar;
