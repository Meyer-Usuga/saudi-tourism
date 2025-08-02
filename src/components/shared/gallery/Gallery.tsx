import { Card } from "@components/shared/card";
import { Title } from "@components/shared/title";
import "./Gallery.scss";

const Gallery = () => {
  const titleContent = {
    title: "Best Destinations",
    subtitle:
      "Explore the enchanting landscapes of saudi Arabia, from the breathtaking deserts to the stunning coastal shores.",
  };

  const content = {
    cards: [
      {
        title: "Hisma Desert",
        subtitle:
          "The Hisma desert is a true marvel of nature, and several desert oasis.",
        avatar: {
          name: "Wazeem Al Mulk",
          info: "Traveler",
          icon: "https://res.cloudinary.com/db1tp6eqg/image/upload/v1753934976/card-1-icon_azuw4t.svg",
        },
        background:
          "https://res.cloudinary.com/db1tp6eqg/image/upload/v1753935163/card-1-bg_z5mmzp.png",
      },
      {
        title: "Kafd World Trade Centre, Riyadh.",
        subtitle:
          "The Towering Structure stands as a testament to Saudi Arabia’s vision for a thriving business hub.",
        avatar: {
          name: "Benjamin Voros",
          info: "Traveler",
          icon: "https://res.cloudinary.com/db1tp6eqg/image/upload/v1753939854/card-2-icon_exc6xg.svg",
        },
        background:
          "https://res.cloudinary.com/db1tp6eqg/image/upload/v1753939853/card-2-bg_j3q2wh.png",
      },
      {
        title: "Al Qarah Mountain",
        subtitle:
          "The Mountain’s distractive rocks formations inviting adventures to explore its hidden treasure.",
        avatar: {
          name: "John Towner",
          info: "Traveler",
          icon: "https://res.cloudinary.com/db1tp6eqg/image/upload/v1753939856/card-3-icon_nmjemb.svg",
        },
        background:
          "https://res.cloudinary.com/db1tp6eqg/image/upload/v1753939855/card-3-bg_cbhl1u.png",
      },
      {
        title: "The best of Tabuk",
        subtitle:
          "Tabuk also spelled Tabouk, the capital city of the Tabuk Region in northwestern Saudi Arabia.",
        avatar: {
          name: "Jonatan Pie",
          info: "Influencer",
          icon: "https://res.cloudinary.com/db1tp6eqg/image/upload/v1753939859/card-4-icon_gnb5ud.svg",
        },
        background:
          "https://res.cloudinary.com/db1tp6eqg/image/upload/v1753939858/card-4-bg_xwfx42.png",
      },
      {
        title: "AlUIa",
        subtitle:
          "AIUIa is located deep in the desert in the northwest of Saudi Arabia",
        avatar: {
          name: "Garrett Parker",
          info: "Traveler",
          icon: "https://res.cloudinary.com/db1tp6eqg/image/upload/v1753939861/card-5-icon_zeugwm.svg",
        },
        background:
          "https://res.cloudinary.com/db1tp6eqg/image/upload/v1753939861/card-5-bg_wjub5t.png",
      },
      {
        title: "The best things To do in Taif",
        subtitle:
          "Taif is a city and governorate in the Makkah Region of Saudi Arabia.",
        avatar: {
          name: "Cristina Gottardi",
          info: "Traveler",
          icon: "https://res.cloudinary.com/db1tp6eqg/image/upload/v1753939865/card-6-icon_kapijh.svg",
        },
        background:
          "https://res.cloudinary.com/db1tp6eqg/image/upload/v1753939861/card-6-bg_cqesnc.png",
      },
    ],
  };

  return (
    <section className="gallery">
      <Title {...titleContent} />

      <div className="gallery__collection">
        {content.cards.map((card, index) => (
          <div className={`gallery__item picture-${index}`} key={index}>
            <Card content={{ card }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
