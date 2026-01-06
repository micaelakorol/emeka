import React from "react";
import NavBar from "./ui/navBar/NavBar";
import Skills from "./ui/skills/Skills";
import Benefits from "./ui/benefits/Benefits";
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
      <Benefits />
      <Footer />
    </>
  );
};

export default page;
