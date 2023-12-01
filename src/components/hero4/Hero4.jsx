import React from "react";
import "./Hero4.css";
import hero4img1 from "../../assets/hero4-img-1.svg";
import hero4img2 from "../../assets/hero4-img-2.svg";
import hero4img3 from "../../assets/hero4-img-3.svg";
import { useTranslation } from "react-i18next";
import i18n from "../../services/language/i18next";
const Hero4 = () => {
  const { t } = useTranslation();
  return (
    <div className="hero4">
      <div className="container">
        <div className="all4">
          <div className="left4">
            <p className="hero4-p1">{t("hero4-p1")}</p>
            <p className="hero4-p2">{t("hero4-p2")}</p>
          </div>
          <div className="right4">
            <div className="cards card-1">
              <img className="hero4-img1" src={hero4img1} alt="" />
              <p className="hero4-p3">{t("hero4-p3")}</p>
              <p className="hero4-p4">{t("hero4-p4")}</p>
            </div>

            <div className="cards card-2">
              <img className="hero4-img1" src={hero4img2} alt="" />
              <p className="hero4-p3">{t("hero4-p3")}</p>
              <p className="hero4-p4">{t("hero4-p4")}</p>
            </div>

            <div className="cards card-3">
              <img className="hero4-img1" src={hero4img3} alt="" />
              <p className="hero4-p3">{t("hero4-p3")}</p>
              <p className="hero4-p4">{t("hero4-p4")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero4;
