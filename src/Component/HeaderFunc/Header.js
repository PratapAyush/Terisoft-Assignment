import React, { Component } from "react";
import styles from "./styles.module.css";
import data from "./data";

const Header = () => {
  return (
    
       <div className={styles.head_container}>
        {data.map((item) => {
          return (
            <div className={styles.container}>
              <span>
                <i class={item.icon}></i>
              </span>
              <p>{item.title}</p>
            </div>
          );
        })}
    </div>
  )
}

export default Header