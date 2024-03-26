import BtnLink from '../../../utils/reusable/BtnLink'
import React from 'react'
import style from "../../../../../public/styles/presentation.module.css";
import { form } from '../../../../../public/assets/images';

const Buttons = () => {
  return (
   <>
    <BtnLink
          href={form}
          className={style.btnTalk} target="_blank"
        >
          Habla conmigo
        </BtnLink>
        <BtnLink href="projects" className={style.btnSeeProject}>
          Conocé mi trabajo
        </BtnLink>
   </>
  )
}

export default Buttons