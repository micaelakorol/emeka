import dataProject from "@/app/utils/dataProject";
import Image from "next/image";
import React from "react";
import style from "../styles/projects.module.css";
import styleButton from '../../../../public/styles/presentation.module.css'
import ButtonBack from "@/app/utils/reusable/ButtonBack";
import BtnLink from "@/app/utils/reusable/BtnLink";

const Cards = () => {
  const data = dataProject.items;

  return (
    <main className={style.containerProjects}>
      <ButtonBack/>
      <ul className={style.containerCard}>
        {data.map((item) => (
          <React.Fragment key={item.id} >
          <li className={style.itemCard}>
            <Image
              src={item.image}
              width={450}
              height={250}
              alt="image_project"
              className={style.imageCard}
            />
            <h3 className={style.titleCard}>{item.infoProject}</h3>
            <div className={style.containerBtn}>
              <BtnLink
                href={item.visit}
                className={styleButton.btnTalk}
              >
                Visitar
              </BtnLink>
            </div>
          </li></React.Fragment>
        ))}
      </ul>
    </main>
  );
};

export default Cards;
