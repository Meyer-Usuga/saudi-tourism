import Essentials from "@components/destinations/Essentials/Essentials";
import Hero from "@components/home/hero/Hero";
import Banner from "@components/shared/banner/Banner";
import Contact from "@components/shared/contact/Contact";
import Gallery from "@components/shared/gallery/Gallery";
import React from "react";

const Destinations = () => {
  const heroProps = {
    title: "Destinations",
    subtitle:
      "Saudi Arabia is rich in heritage and history. The country is home to hundreds of historically important sites.",
    content: [],
    backgroundImage: "bg-destinations",
  };

  const bannerProps = {
    title: "Made To Change NEOM",
    backgroundImage: "bg-ocean",
    showButton: true,
  };

  return (
    <React.Fragment>
      <Hero {...heroProps} />
      <Gallery />
      <Essentials />
      <Contact />
      <Banner {...bannerProps} />
    </React.Fragment>
  );
};

export default Destinations;
