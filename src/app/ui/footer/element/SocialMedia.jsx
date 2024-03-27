import BtnLink from "../../../utils/reusable/BtnLink";
import React from "react";
import style from "../../../../../public/styles/footer.module.css";
import Image from "next/image";
import {
  email,
  instagram,
  whatsapp,
} from "../../../../../public/assets/images";

const SocialMedia = () => {
  return (
    <section className={style.social_media}>
      <BtnLink href="https://www.instagram.com/emekadigital" target="_blank">
        {" "}
        <Image src={instagram} alt="instagram" width={23} height={21} />{" "}
      </BtnLink>
      <BtnLink href="https://wa.link/bb9uxu" target="_blank">
        {" "}
        <Image src={whatsapp} alt="whatsApp" width={23} height={21} />{" "}
      </BtnLink>
      <a href="mailto:emekadigital.contacto@gmail.com">
        <Image src={email} alt="email" width={27} height={26} />{" "}
      </a>
    </section>
  );
};

export default SocialMedia;
