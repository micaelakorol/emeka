import React from "react";
import style from "../../../../public/styles/presentation.module.css";
import HandImage from "./elements/HandImage";
import Buttons from "./elements/Buttons";

const Presentation = () => {
  return (
    <main className={style.containerPresentation}>
      <HandImage />
      <section>
        <h2 className={style.titleFrontend}> Soy Desarrolladora Web</h2>
        <p className={style.description}>
          {" "}
          Y mi objetivo es convertir tus ideas en un sitio web atractivo y funcional.  <br />
          ¿List@ para llevar tu negocio al mundo digital? 
        </p>
        <Buttons />
      </section>
    </main>
  );
};

export default Presentation;
