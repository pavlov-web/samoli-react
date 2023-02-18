import React from "react";
import styles from "./about-card.module.scss";

const AboutCard = () => {
  return (
    <div className={styles.about_card}>
      <div className={styles.left}>
        <h3>Несколько цифр о нас</h3>
        <p>
          Производим ремонт, перетяжку любой <br />
          мягкой мебели и фурнитуры!
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.item}>
          <h4>11 лет</h4>
          <p>минимальный опыт наших сотрудником</p>
        </div>
        <div className={styles.item}>
          <h4>7342</h4>
          <p>выполненных заказа</p>
        </div>
        <div className={styles.item}>
          <h4>3 года</h4>
          <p>гарантии качества</p>
        </div>
        <div className={styles.item}>
          <h4>3874</h4>
          <p>образцов ткани и кожи</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
