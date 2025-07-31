import "./Hero.scss";

type content = {
  title: string;
  paragraph: string;
};

type Props = {
  title: string;
  subtitle: string;
  content: content[];
  backgroundImage: string;
};

const Hero = (props: Props) => {
  const { title, subtitle, content, backgroundImage } = props;

  return (
    <section className={`hero ${backgroundImage}`}>
      <div className="hero__title">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="hero__content">
        {content.length > 0 &&
          content.map((item, index) => (
            <article className="hero__item" key={index}>
              <h3>{item.title}</h3>
              <p>{item.paragraph}</p>
            </article>
          ))}
      </div>
    </section>
  );
};

export default Hero;
