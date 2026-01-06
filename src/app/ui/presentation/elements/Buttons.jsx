import BtnLink from '../../../utils/reusable/BtnLink'
import React from 'react'
import style from "../../../../../public/styles/presentation.module.css";
import { form } from '../../../../../public/assets/images';

const Buttons = () => {
  return (
   <>
    <BtnLink
          href="templates"
          className={style.btnTalk} 
        >
          Ver Templates
        </BtnLink>
        <BtnLink href="" className={style.btnDeveloper}>
          Desarrollo personalizado
        </BtnLink>
   </>
  )
}

export default Buttons