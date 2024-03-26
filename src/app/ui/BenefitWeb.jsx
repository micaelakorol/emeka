import React from "react";
import style from "../../../public/styles/benefitWeb.module.css";
import styles from "../../../public/styles/presentation.module.css";
import BtnLink from "../utils/reusable/BtnLink";
import { form } from "../../../public/assets/images";

const BenefitWeb = () => {
  return (
    <section className={style.containerWeb}>
      <h3>¿Conoces los beneficios de tener un sitio web?</h3>
      <ul>
        <li>
          → Te ayuda a llegar a un público más amplio, establece credibilidad
          para tu marca y te permite mostrar tus productos o servicios.
        </li>
        <li>
          {" "}
          → Te brinda la oportunidad de destacarte frente a la competencia.
        </li>
        <li>
          {" "}
          → Tendrás presencia constante en línea, permitiendo que tu negocio
          esté disponible las 24 horas del día, los 7 días de la semana.
        </li>
      </ul>

      <BtnLink
        href={form}
        className={styles.btnTalk}
        target="_blank"
      >
        ¡Comienza ahora mismo!
      </BtnLink>
    </section>
  );
};

export default BenefitWeb;
