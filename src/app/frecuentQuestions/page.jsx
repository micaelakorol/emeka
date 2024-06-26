import React from "react";
import { questions } from "./questions";
import style from "../../../public/styles/benefitWeb.module.css";
import styleP from "../../../public/styles/services.module.css";
import ButtonBack from "../utils/reusable/ButtonBack";

const page = () => {
  return (
    <>
      <ButtonBack />
      <section className={style.containerWeb}>
        {questions.map((item) => (
          <details key={item.id}>
            <summary>{item.question}</summary>
            <p className={styleP.descriptionService}>{item.answer}</p>
          </details>
        ))}
      </section>
    </>
  );
};

export default page;
