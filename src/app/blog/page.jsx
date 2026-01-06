import React from "react";
import { dataTypesWeb } from "./dataTypesWebsites";
import Image from "next/image";
import serviceStyle from '../../../public/styles/services.module.css'
import style from './styles/blog.module.css'
import ButtonBack from "../utils/reusable/ButtonBack";

const page = () => {
  const data = dataTypesWeb.items;
  return (
    <section>
      <ButtonBack />
      <h2 className={serviceStyle.titleService}>¿Qué tipo de sitio web me conviene?</h2>
      <article className={style.containerBlog}>
        {data.map((item) => (
          <div key={item.id} className={style.cardBlog}>
            <Image src={item.image} alt={item.title} width={65} height={65} />
            <div>
              <h4 className={serviceStyle.titleCard}>{item.title}</h4>
              <h5 className={style.subCard}>¿Qué es?</h5>
              <p className={serviceStyle.descriptionService}>{item.description}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default page;
