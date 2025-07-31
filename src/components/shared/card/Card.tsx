import "./Card.scss";

type Avatar = {
  icon: string;
  name: string;
  info: string;
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
};

const Card = ({ content }: Props) => {
  const { card } = content;
  return (
    <div className="card-container">
      <article
        className="card"
        style={{ backgroundImage: `url(${card.background})` }}
      >
        <div className="card__header">
          <h4>{card.title}</h4>
          <p>{card.subtitle}</p>
        </div>

        {card.avatar && (
          <div className="card__footer">
            <img
              src={card.avatar.icon}
              alt="Avatar of the person"
              loading="lazy"
            />
            <div className="card__avatar-info">
              <h5>{card.avatar.name}</h5>
              <p>{card.avatar.info}</p>
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default Card;
