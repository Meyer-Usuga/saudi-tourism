import Carousel from "@components/home/carousel/Carousel";
import Hero from "@components/home/hero/Hero";
import Gallery from "@components/shared/gallery/Gallery";
import React from "react";

const Home = () => {
  const heroProps = {
    title: "Explore Saudi Arabia",
    subtitle:
      "Saudi Arabia is rich in heritage and history. The country is home to hundreds of historically important sites.",
    content: [
      {
        title: "History and Heritage",
        paragraph:
          "Saudi Arabia has long occupied an important role at the center of the islamic and Arab worlds. Located at the heart of three continents.",
      },
      {
        title: "People and Culture",
        paragraph:
          "Saudi Arabia has a rich Culture Shaped by the diversity of its people. which has formed the basis of its cultural identity.",
      },
    ],
    backgroundImage: "bg-home",
  };

  return (
    <React.Fragment>
      <Hero {...heroProps} />
      <Carousel />
      <Gallery />
    </React.Fragment>
  );
};

export default Home;
