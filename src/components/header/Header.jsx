import React from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";
import i18n from "../../services/language/i18next";
function Header() {
  const { t } = useTranslation();
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="#" className="logo"></a>
          <p className="Product">Telegraph</p>
          <div className="nav-items">
            <img className="logo2" src="assets/logo3.svg" alt="" />
            <img className="logo3" src="assets/logo2.svg" alt="" />
            <div className="headerbtn">
              <select
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                name=""
                id=""
              >
                <option value="uz">uz</option>
                <option value="en">en</option>
                <option value="ru">ru</option>
              </select>

              <button className="btn2">Try Beta</button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
