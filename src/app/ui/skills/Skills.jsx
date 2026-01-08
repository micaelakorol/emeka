import React from 'react';
import styles from '../../../../public/styles/skills.module.css';
const Skills = () => {
  return (
<div className={styles.containerSkill}>
  <article className={styles.skill}>
    <h3 className={styles.skillTitle}>
      Tecnologías que usamos para tu web
    </h3>
    <p className={styles.description}>
      Elige entre <strong>templates listos</strong> o <strong>desarrollos personalizados</strong>.  
      Todos creados con tecnologías modernas como <strong>React, Next.js, HTML, CSS </strong> para velocidad, diseño limpio y funcionalidades avanzadas.
    </p>
  </article>
</div>


  );
};

export default Skills;
