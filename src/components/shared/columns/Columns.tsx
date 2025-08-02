import { Card } from "@components/shared/card";
import { Button } from "@components/shared/button";
import "./Columns.scss";

type Order = "image-content" | "content-image";

type Content = {
  title: string;
  paragraph: string;
};

type Props = {
  order: Order;
  backgroundImage: string;
  content: Content;
};

const Columns = (props: Props) => {
  const { order, content, backgroundImage } = props;
  const { title, paragraph } = content;

  return (
    <article className={`columns ${order}`}>
      <Card
        content={{ card: { background: backgroundImage } }}
        className="columns__image"
      />

      <div className="columns__content">
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <Button type="secondary" size="small" styles={{ float: "inline-end" }}>
          <img
            src="https://res.cloudinary.com/db1tp6eqg/image/upload/v1754022195/arrow_z3jr2d.svg"
            alt="Button icon"
          />
        </Button>
      </div>
    </article>
  );
};

export default Columns;
