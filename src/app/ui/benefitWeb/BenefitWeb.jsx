import React from "react";
import style from "../../../../public/styles/benefitWeb.module.css";
import styles from "../../../../public/styles/presentation.module.css";
import BtnLink from "../../utils/reusable/BtnLink";
import { form } from "../../../../public/assets/images";
import { items } from "./items";

const BenefitWeb = () => {
  return (
    <section className={style.containerWeb}>
      <h3>¿Conoces los beneficios de tener un sitio web?</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>

      <BtnLink href={form} className={styles.btnTalk} target="_blank">
        ¡Comienza ahora mismo!
      </BtnLink>
    </section>
  );
};

export default BenefitWeb;
