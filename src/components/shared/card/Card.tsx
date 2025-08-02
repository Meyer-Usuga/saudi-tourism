import Avatar from "@components/shared/avatar/Avatar";
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
  return (
    <div className={`card-container ${className}`}>
      <article
        className="card"
        style={{ backgroundImage: `url(${card.background})` }}
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
