import Image from "next/image";
import Link from "next/link";
import React from "react";
import styleNav from '../../../../public/styles/navBar.module.css'

const ButtonsSocial = ({ href, download, target, src, alt }) => {
  return (
    <div>
    <Link
      href={href}
      target={target}
      download={download}
      className={styleNav.icons}
    >
      <Image src={src} alt={alt} width={23} height={23} />{" "}
    </Link>
    </div>
  );
};

export default ButtonsSocial;
