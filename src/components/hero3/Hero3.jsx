import React from "react";
import "./Hero3.css";
import hero3img from "../../assets/hero3-img-1.svg";
import { useTranslation } from "react-i18next";
import i18n from "../../services/language/i18next";
const Hero3 = () => {
  const { t } = useTranslation();
  return (
    <div className="hero3">
      <div className="container">
        <div className="all3">
          <div className="left2">
            <img src={hero3img} alt="" />
          </div>
          <div className="right2">
            <p className="hero3-p1">{t("hero3-p1")}</p>
            <p className="hero3-p2">{t("hero3-p2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
