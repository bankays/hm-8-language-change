import React from "react";
import "./Card2.css";
import img1 from "../../assets/card-img1.svg";
import img2 from "../../assets/card-img2.svg";
import img3 from "../../assets/card-img-3.svg";
import img4 from "../../assets/card-img-4.svg";
import { useTranslation } from "react-i18next";
import i18n from "../../services/language/i18next";

const Card2 = () => {
  const { t } = useTranslation();
  return (
    <div className="card2">
      <div className="container">
        <div className="all2">
          <div className="card">
            <img className="card-img1" src={img1} alt="" />
            <p className="card-p1">Android</p>
            <p className="card-p2"> {t("card-p2")}</p>

            <div className="fl">
              <p className="card-p3">{t("card-p3")}</p>
              <img className="img4" src={img4} alt="" />
            </div>
          </div>
          {/* <h2>{t("greating")}</h2> */}
          <div className="card">
            <img className="card-img1" src={img2} alt="" />
            <p className="card-p1">Android</p>
            <p className="card-p2">{t("card-p2")}</p>

            <div className="fl">
              <p className="card-p3">{t("card-p3")}</p>
              <img className="img4" src={img4} alt="" />
            </div>
          </div>

          <div className="card">
            <img className="card-img1" src={img3} alt="" />
            <p className="card-p1">Android</p>
            <p className="card-p2">{t("card-p2")}</p>

            <div className="fl">
              <p className="card-p3">{t("card-p3")}</p>
              <img className="img4" src={img4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
