import React from "react";
import dataProject from "../utils/dataProject";
import ButtonBack from "../utils/reusable/ButtonBack";
import BtnLink from "../utils/reusable/BtnLink";
import Image from "next/image";
import style from "./styles/projects.module.css";
import styleButton from "../../../public/styles/presentation.module.css";
import title from "../../../public/styles/services.module.css";

const page = () => {
  const data = dataProject.items;
  return (
    <div className={style.containerProjects}>
      <ButtonBack />
      <h2 className={title.titleService}>
        Proyectos que desarrollé.
      </h2>
      <div className={style.containerCard}>
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <section className={style.itemCard}>
              <Image
                src={item.image}
                width={450}
                height={250}
                alt="image_project"
                className={style.imageCard}
              />
              <h3 className={style.titleCard}>{item.infoProject}</h3>
                <BtnLink href={item.visit} className={styleButton.btnTalk} target="_blank">
                  Visitar
                </BtnLink>
            </section>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default page;
