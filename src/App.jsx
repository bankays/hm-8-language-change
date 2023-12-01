import { useState } from "react";

import "./App.css";
import { useTranslation } from "react-i18next";
import i18n from "./services/language/i18next";
import Header from "./components/header/Header";
import Hero1 from "./components/hero1/Hero1";
import Card2 from "./components/card2/Card2";
import Hero3 from "./components/hero3/Hero3";
import Hero4 from "./components/hero4/Hero4";
import Hero5 from "./components/hero5/Hero5";
import Footer from "./components/footer/Footer";
function App() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Hero1 />
      <Card2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Footer />
    </>
  );
}

export default App;
