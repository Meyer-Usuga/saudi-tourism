import { Columns, Title, Card, Button } from "@components/shared";
import "./Traditions.scss";

const Traditions = () => {
  const titleContent = {
    title: "Saudi, a kingdom that inspires",
    subtitle: "A uniquely Saudi experience awaits in winter",
  };

  const firstContent = {
    title: "Language",
    paragraph:
      "Arabic is the official language of Saudi Arabia and the primary language used in all dealings and public transactions. English serves as an informal second language in the Kingdom and is spoken by a large section of its society. All road signs are bilingual, showing information in both Arabic and English.",
    background:
      "https://res.cloudinary.com/db1tp6eqg/image/upload/v1754113763/neom-3DPaL6XDcZE-unsplash_1_vev28x.svg",
  };

  const secondContent = {
    title: "Culture",
    paragraph:
      "Saudi Arabia’s rich heritage and traditions have been shaped by its position as a historic trade hub and the birthplace of Islam. In recent years, the Kingdom has undergone a significant cultural transformation, evolving centuy-old customs to fit the contemporary world we live in today.",
    background:
      "https://res.cloudinary.com/db1tp6eqg/image/upload/v1754113764/neom-3DPaL6XDcZE-unsplash_1_1_bfdvt2.svg",
  };

  const buttonIcon = () => {
    return (
      <Button type="secondary" size="small" styles={{ float: "inline-end" }}>
        <img
          src="https://res.cloudinary.com/db1tp6eqg/image/upload/v1754022195/arrow_z3jr2d.svg"
          alt="Button icon"
          loading="lazy"
        />
      </Button>
    );
  };

  return (
    <section className="traditions">
      <Title {...titleContent} />
      <h1 className="traditions__title">Traditions of Saudi Arabia</h1>

      <div className="traditions__content">
        <Columns>
          <Card
            content={{
              card: {
                background: firstContent.background,
              },
            }}
            className="traditions__image"
          />

          <div className="traditions__text">
            <h2>{firstContent.title}</h2>
            <p>{firstContent.paragraph}</p>
            {buttonIcon()}
          </div>
        </Columns>

        <Columns>
          <div className="traditions__text">
            <h2>{secondContent.title}</h2>
            <p>{secondContent.paragraph}</p>
            {buttonIcon()}
          </div>

          <Card
            content={{
              card: {
                background: secondContent.background,
              },
            }}
            className="traditions__image"
          />
        </Columns>
      </div>
    </section>
  );
};

export default Traditions;
