import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";
import i18n from "../../services/language/i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="container">
        <div className="link">
          <p>© Telegraph. 2020 — All rights reserved.</p>
          <div className="links">
            <p>Twiter</p>
            <p>Instagram</p>
            <p>Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
