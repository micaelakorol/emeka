import React from "react";
import style from "../../../../public/styles/presentation.module.css";
import Buttons from "./elements/Buttons";
import Rocket from "./elements/Rocket";
const Presentation = () => {
  return (
    <main className={style.containerPresentation}>
      <section>
        <h1 className={style.title}>
        Construyo tu presencia digital desde cero con soluciones digitales personalizadas.
        </h1>
        <p className={style.description}>
          {" "}
          ¡Es momento de despegar hacia tu futuro digital!
        </p>
        <Buttons />
      </section>
      <Rocket />
    </main>
  );
};

export default Presentation;
