import React from "react";
import style from "../../../../public/styles/footer.module.css";
import Items from "./element/Items";
import SocialMedia from "./element/SocialMedia";
const Footer = () => {
  return (
    <footer className={style.containerFooter}>
      <section className={style.items}>
        <p>Teléfono: (+54 2215522293)</p>
        <p>La Plata, Buenos Aires</p>
      </section>
      <Items />
      <SocialMedia />
    </footer>
  );
};

export default Footer;
