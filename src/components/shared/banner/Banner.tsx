import Button from "@components/shared/button/Button";
import "./Banner.scss";

type Props = {
  title: string;
  backgroundImage: string;
  showButton: boolean;
};

const Banner = (props: Props) => {
  const { title, showButton, backgroundImage } = props;

  return (
    <section className="banner-container">
      <div className={`banner ${backgroundImage}`}>
        <h1 className="banner__title">{title}</h1>

        {showButton && (
          <Button
            type="secondary"
            size="large"
            styles={{ marginRight: "30px" }}
          >
            <img
              src="https://res.cloudinary.com/db1tp6eqg/image/upload/v1754022195/arrow_z3jr2d.svg"
              alt="Button icon"
            />
          </Button>
        )}
      </div>
    </section>
  );
};

export default Banner;
