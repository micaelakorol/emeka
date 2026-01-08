import React from 'react';
import style from '../../../../public/styles/benefitWeb.module.css';
import styles from '../../../../public/styles/presentation.module.css';
import BtnLink from '../../reusable/BtnLink';
import { form } from '../../../../public/assets/images';
import { items } from './data/items';

const Benefits = () => {
  return (
    <section className={style.containerWeb}>
      <h3>¿Por qué tener tu sitio web?</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>

      <BtnLink href={form} className={styles.btnTalk} target="_blank">
        ¡Comienza ahora mismo!
      </BtnLink>
    </section>
  );
};

export default Benefits;
