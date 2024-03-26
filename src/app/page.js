import React from "react";
import NavBar from "./ui/NavBar";
import Skills from "./ui/Skills";
import BenefitWeb from "./ui/BenefitWeb";
import Services from "./ui/Services";
import Footer from "./ui/footer/Footer";
import Presentation from "./ui/presentation/Presentation";

const page = () => {
  return (
    <>
      <NavBar />
      <Presentation />
      <Skills />
      <Services />
      <BenefitWeb />
      <Footer />
    </>
  );
};

export default page;
