import Traditions from "@components/about/traditions/Traditions";
import Hero from "@components/home/hero/Hero";
import Banner from "@components/shared/banner/Banner";
import Contact from "@components/shared/contact/Contact";
import Payments from "@components/about/payments/Payments";
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
