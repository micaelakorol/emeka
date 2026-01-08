import BtnLink from '../../../reusable/BtnLink';
import React from 'react';
import style from '../../../../../public/styles/presentation.module.css';
import { form } from '../../../../../public/assets/images';

const Buttons = () => {
  return (
    <>
      <BtnLink href="templates" className={style.btnTalk}>
        Ver Templates
      </BtnLink>
      <BtnLink
        href="https://docs.google.com/forms/d/1r9efbF9XZfEEK7p60ZfmDQZK_NBc7AOXRzn6e6KSI_Q/edit"
        className={style.btnDeveloper}
      >
        Desarrollo personalizado
      </BtnLink>
    </>
  );
};

export default Buttons;
