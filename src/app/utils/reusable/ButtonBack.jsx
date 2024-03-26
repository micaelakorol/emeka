import Image from "next/image";
import Link from "next/link";
import React from "react";
import { back } from "../../../../public/assets/images";

const ButtonBack = () => {
  return (
    <Link href="/">
      <Image src={back} alt="back" width={25} height={25} />
    </Link>
  );
};

export default ButtonBack;
