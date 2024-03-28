import React from "react";
import styleNav from "../../../../public/styles/navBar.module.css";
import BtnLink from "../../utils/reusable/BtnLink";
import { links } from "../../utils/links";
import Image from "next/image";
import { logo } from "../../../../public/assets/images";

const NavBar = () => {
  return (
    <header className={styleNav.containerNav}>
      <section className={styleNav.logo}>
      <Image src={logo} width={300} height={200} alt='logo' />
      </section>
      <nav className={styleNav.links}>
        {links.map((item) => (
          <React.Fragment key={item.id}>
            <BtnLink href={item.href} className={styleNav.btnNav}>
              {item.name}
            </BtnLink>
          </React.Fragment>
        ))}
      </nav>
    </header>
  );
};

export default NavBar;
