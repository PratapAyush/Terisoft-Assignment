import React from "react";
import styles from "./styles.module.css";
import data from "./data1";

const card = () => {
  console.log(data);
  return (
    <div className={styles.card_container}>
    {data.map((data)=>{
      return (
        <div>
        <img width="50%" height="80%" src={data.url} alt={data.title} />
        <div className={styles.card_container_details}>
        <div className={styles.details}>
          <div className={styles.title}>
            <p>{data.title}</p>
            <p className={styles.time}>{data.time}</p>
          </div>
          <button className={styles.btn}>{data.btn1}</button>
          <button className={styles.btn}>{data.btn2}</button>
        </div>
      </div>

        </div>

      )
    })}
    

     
    </div>
  );
};

export default card;
