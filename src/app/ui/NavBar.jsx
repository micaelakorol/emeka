import React from "react";
import styleNav from "../../../public/styles/navBar.module.css";
import BtnLink from "../utils/reusable/BtnLink";
import { links } from "../utils/links";
import Image from "next/image";
import logo from '../../../public/assets/logo.svg'

const NavBar = () => {
  return (
    <nav className={styleNav.containerNav}>
      <picture className={styleNav.logo}>
      <Image src={logo} width={300} height={200} alt='logo' />
      </picture>
      <section className={styleNav.links}>
        {links.map((item) => (
          <React.Fragment key={item.id}>
            <BtnLink href={item.href} className={styleNav.btnNav}>
              {item.name}
            </BtnLink>
          </React.Fragment>
        ))}
      </section>
    </nav>
  );
};

export default NavBar;
