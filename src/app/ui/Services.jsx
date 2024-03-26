import Image from "next/image";
import React from "react";
import style from "../../../public/styles/services.module.css";
import { services } from "../utils/dataServices";
import { arrow } from "../../../public/assets/images";
const Services = () => {
  return (
    <>
      {" "}
      <h4 className={style.titleService}>
        Qué hago por ti{" "}
        <Image src={arrow} width={15} height={15} alt="arrow" />{" "}
      </h4>
      <section className={style.services}>
        {services.map((item) => (
          <ul key={item.id} className={style.cardService}>
          <Image src={item.image} alt={item.title} width={22} height={22} />
          <li>
            <h5 className={style.titleCard}>{item.title}</h5>
            <p className={style.descriptionService}>
             {item.description}
            </p>
          </li>
        </ul>
        ))}
       
      </section>
    </>
  );
};

export default Services;
