import Image from 'next/image'
import React from 'react'
import style from "../../../../../public/styles/presentation.module.css";
import { hand } from '../../../../../public/assets/images'

const HandImage = () => {
  return (
    <section>
    <Image
      src={hand}
      alt="hand"
      height={50}
      width={50}
      className={style.avatar}
    />
    <h1 className={style.title}>
      ¡Hola!
      <br />
      mi nombre es Micaela
    </h1>
  </section>
  )
}

export default HandImage