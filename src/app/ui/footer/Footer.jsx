import React from "react";
import style from "../../../../public/styles/footer.module.css";
import Items from "./element/Items";
import SocialMedia from "./element/SocialMedia";
const Footer = () => {
  return (
    <footer className={style.containerFooter}>
      <section className={style.items}>
        <p>Teléfono: (+54 1124000822)</p>
        <p>Buenos Aires, Argentina</p>
      </section>
      <Items />
      <SocialMedia />
    </footer>
  );
};

export default Footer;
