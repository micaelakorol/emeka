import React from "react";
import style from "../../../../public/styles/presentation.module.css";
import Buttons from "./elements/Buttons";
import Rocket from "./elements/Rocket";
const Presentation = () => {
  return (
    <main className={style.containerPresentation}>
      <section>
        <h1 className={style.title}>
         Llevá tu negocio al mundo digital: elige entre templates listos para usar o sitios personalizados.
        </h1>
        <p className={style.description}>
          {" "}
            ¡Templates listos o sitios personalizados, tu web empieza hoy!
        </p>
        <Buttons />
      </section>
      <Rocket />
    </main>
  );
};

export default Presentation;
