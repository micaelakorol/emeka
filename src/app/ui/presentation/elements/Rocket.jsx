import React from 'react'
import Image from "next/image";
import {rocketMain} from '../../../../../public/assets/images'

const Rocket = () => {
  return (
    <section>
      <Image src={rocketMain} width={320} height={270} alt='rocket-main' />
    </section>
  )
}

export default Rocket