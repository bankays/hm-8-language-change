import React from "react";
import "./Hero5.css";
import hero5img1 from "../../assets/hero5-img-1.svg";
import hero5img2 from "../../assets/hero5-img-2.svg";
import { useTranslation } from "react-i18next";
import i18n from "../../services/language/i18next";
const Hero5 = () => {
  const { t } = useTranslation();
  return (
    <div className="hero5">
      <div className="container">
        <div className="all5">
          <div className="left5">
            <img className="hero5-img1" src={hero5img1} alt="" />
            <img className="hero5-img2" src={hero5img2} alt="" />
          </div>
          <div className="right5">
            <p className="hero5-p1">{t("hero5-p1")}</p>
            <p className="hero5-p2">{t("hero5-p2")}</p>
          </div>
        </div>
        <div className="card10">
          <p className="hero5-p3">{t("hero5-p3")}</p>
          <p className="hero5-p4">{t("hero5-p4")}</p>
          <button className="hero5-btn1">{t("hero5-btn1")}</button>
        </div>
      </div>
    </div>
  );
};

export default Hero5;
