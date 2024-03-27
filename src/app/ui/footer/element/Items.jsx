import React from 'react'
import style from "../../../../../public/styles/footer.module.css";
import { form } from '../../../../../public/assets/images';
import BtnLink from '../../../utils/reusable/BtnLink';

const Items = () => {
  return (
    <section className={style.items}>
    <BtnLink href={form}
    target="_blank"
    >
      {" "}
      Quiero un presupuesto
    </BtnLink>
    <BtnLink href="/frecuentQuestions">
      {" "}
      Preguntas frecuentes{" "}
    </BtnLink>
  </section>
  )
}

export default Items