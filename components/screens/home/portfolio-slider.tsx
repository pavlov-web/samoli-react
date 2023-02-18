import React from "react";
import styles from "./portfolio-slider.module.scss";
import AboutCard from "@/components/shared/about-card/about-card";
const PortfolioSlider = () => {
  return (
    <div className={styles.portfolio_slider}>
      <AboutCard />
      <div className="container">
        <div className={styles.heading}>
          <h3>Последние работы</h3>
          <p>
            Нашим приоритетом является честное отношение с нашими клиентами, вы не переплачиваете за материал, а платите
            за качественную работу и старание наших сотрудников!
          </p>
        </div>
        <div className={styles.filter}>
          <div className={styles.filter_item}>
            <h4>Тип мебели:</h4>
            <div className="row">
              <label className="checkbox active">Диван</label>
              <label className="checkbox">Кресло</label>
              <label className="checkbox">Кровать</label>
              <label className="checkbox">Пуфы</label>
              <label className="checkbox">Софа</label>
              <label className="checkbox">Стулья</label>
              <label className="checkbox">Тахта</label>
              <label className="checkbox">Угловой диван</label>
            </div>
          </div>
          <div className={styles.filter_item}>
            <h4>Тип материала:</h4>
            <div className="row">
              <label className="checkbox">Кожезаменитель</label>
              <label className="checkbox">Кожа</label>
              <label className="checkbox">Ткань</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSlider;
