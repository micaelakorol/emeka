import React from "react";
import NavBar from "./ui/navBar/NavBar";
import Skills from "./ui/skills/Skills";
import BenefitWeb from "./ui/benefitWeb/BenefitWeb";
import Services from "./ui/services/Services";
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
