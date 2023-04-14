import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

import styles from "./styles.module.css";


const Highlight = () => {
  
  return (
    <>
      <h1 className={styles.heading}>
        Highlights
        </h1>
        <Card/>
     
    </>
  );
};

export default Highlight;
