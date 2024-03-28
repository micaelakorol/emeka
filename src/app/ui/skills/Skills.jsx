import React from "react";
import { skills } from "../../utils/skills";
import styles from "../../../../public/styles/skills.module.css";
import ImageSkills from "./ImageSkills";
const Skills = () => {
  const icon = skills;
  return (
    <div className={styles.containerSkill}>
      <article>
        <h3 className={styles.skillTitle}>
          Descubre las tecnologías que utilizo..
        </h3>
        <p className={styles.description}>
          Junto con React y Next.js creamos un sitio web rápido y bien posicionado
          en buscadores. Combinado con CSS y HTML para un diseño impecable.
          Además, integramos Firebase para añadir características dinámicas.
        </p>
      </article>
      <section className={styles.containerIcons}>
        {icon.map((image) => (
          <React.Fragment key={image.id}>
            <ImageSkills src={image.src} name={image.name} />
          </React.Fragment>
        ))}
      </section>
    </div>
  );
};

export default Skills;
