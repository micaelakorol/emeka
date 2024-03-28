import React from 'react'
import Image from "next/image";
import despega from "../../../../../public/assets/despega.svg";

const Rocket = () => {
  return (
    <section>
      <Image src={despega} width={320} height={270} />
    </section>
  )
}

export default Rocket