import { Avatar } from "@components/shared";
import { useAnimationInView } from "@utils/hooks";
import { AnimationClass } from "@utils/animations";
import "./Card.scss";

type Avatar = {
  name: string;
  info: string | undefined;
  icon: string;
};

type CardBody = {
  title?: string;
  subtitle?: string;
  avatar?: Avatar;
  background: string;
};

type Content = {
  card: CardBody;
};

type Props = {
  content: Content;
  className?: string;
};

const Card = ({ content, className }: Props) => {
  const { card } = content;
  const { ref } = useAnimationInView({
    class: AnimationClass.fadeIn,
    threshold: 0,
    repeat: false,
  });

  return (
    <div className={`card-container ${className}`}>
      <article
        ref={ref}
        className="card animatedOpening"
        style={
          { "--bg-image": `url(${card.background})` } as React.CSSProperties
        }
      >
        {card.title && card.subtitle && (
          <div className="card__header">
            <h4>{card.title}</h4>
            <p>{card.subtitle}</p>
          </div>
        )}
        {card.avatar && <Avatar {...card.avatar} />}
      </article>
    </div>
  );
};

export default Card;
