import { useAnimationInView } from "@utils/hooks";
import "./Hero.scss";
import { AnimationClass } from "@utils/animations";
import { useRef } from "react";

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

  const { ref: titleRef } = useAnimationInView({
    class: "animate__fadeInDown",
    threshold: 0,
    repeat: false,
  });

  const { ref: contentRef } = useAnimationInView({
    class: AnimationClass.fadeInUp,
    threshold: 0,
    repeat: false,
  });

  return (
    <section className={`hero ${backgroundImage}`}>
      <div ref={titleRef} className="hero__title">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div ref={contentRef} className="hero__content">
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
