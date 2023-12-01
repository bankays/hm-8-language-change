import React from "react";
import "./Hero1.css";
import img from "../../assets/img-1.svg";
import { useTranslation } from "react-i18next";
import i18n from "../../services/language/i18next";
const Hero1 = () => {
  const { t } = useTranslation();
  return (
    <div className="hero1">
      <div className="container">
        <div className="all">
          <div className="left">
            <p className="left-p1">{t("left-p1")}</p>
            {/* <h2>{t("greating")}</h2> */}
            <p className="left-p2">{t("left-p2")}</p>
            <button className="left-btn1">{t("left-btn1")}</button>
          </div>
          <div className="right">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
