import BtnLink from '@/app/utils/reusable/BtnLink'
import React from 'react'
import style from "../../../../../public/styles/footer.module.css";
import Image from "next/image";
import { email, instagram } from '../../../../../public/assets/images';

const SocialMedia = () => {
  return (
    <section className={style.social_media}>
        <BtnLink href="/" target="_blank">
          {" "}
          <Image src={instagram} alt="instagram" width={23} height={21} />{" "}
        </BtnLink>
        <a href="mailto:micaelakorol@gmail.com">
          <Image src={email} alt="email" width={27} height={25} />{" "}
        </a>
      </section>
  )
}

export default SocialMedia