import { Banner, Contact, Hero } from "@components/shared";
import { Traditions, Payments } from "@components/about";
import React from "react";

const About = () => {
  const heroProps = {
    title: "About Us",
    subtitle: "Discover the country's hidden gems and breathtaking landscapes",
    content: [],
    backgroundImage: "bg-about",
  };

  const bannerProps = {
    title: "Made To Change NEOM",
    backgroundImage: "bg-desert",
    showButton: true,
  };

  return (
    <React.Fragment>
      <Hero {...heroProps} />
      <Traditions />
      <Payments />
      <Contact />
      <Banner {...bannerProps} />
    </React.Fragment>
  );
};

export default About;
