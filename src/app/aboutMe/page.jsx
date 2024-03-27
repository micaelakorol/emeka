import React from "react";
import ButtonBack from "../utils/reusable/ButtonBack";
import Image from "next/image";
import style from "./styles/aboutMe.module.css";
import { imageMe } from "../../../public/assets/images";

const page = () => {
  return (
    <>
      <ButtonBack />
      <section className={style.containerAboutMe}>
        <Image src={imageMe} alt="me" width={150} height={150} />
        <p className={style.aboutMe}>
          ¿Quién soy? <br />
          Mi nombre es Micaela Korol y soy estudiante de Analista Programador en
          la Universidad Nacional de La Plata. Además, me desempeño como
          Desarrolladora Web. Mi trayectoria en el mundo de la programación
          comenzó como un simple &quot;hobbie&quot;, pero rápidamente se
          convirtió en algo más significativo. <br />
          Mi objetivo principal es
          <b>
            ayudar a emprendedores y a personas que ofrecen servicios a
            insertarse en el mundo digital.
          </b>
          Creo firmemente en el poder de la tecnología para transformar y
          potenciar negocios, por lo que me dedico a brindar soluciones
          innovadoras y eficientes para quienes buscan destacarse en el mundo
          digital.
        </p>
      </section>
    </>
  );
};

export default page;
