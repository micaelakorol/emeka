import React from "react";
import dataProject from "../utils/dataProject";
import ButtonBack from "../utils/reusable/ButtonBack";
import BtnLink from "../utils/reusable/BtnLink";
import Image from "next/image";
import style from "./styles/projects.module.css";
import styleButton from '../../../public/styles/presentation.module.css'

const page = () => {
  const data = dataProject.items;
  return (
    <section className={style.containerProjects}>
      <ButtonBack />
      <ul className={style.containerCard}>
        {data.map((item) => (
          <React.Fragment key={item.id}>
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
                <BtnLink href={item.visit} className={styleButton.btnTalk}>
                  Visitar
                </BtnLink>
              </div>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};

export default page;
