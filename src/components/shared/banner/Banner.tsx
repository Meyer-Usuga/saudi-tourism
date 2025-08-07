import Button from "@components/shared/button/Button";
import "./Banner.scss";
import { useAnimationInView } from "@utils/hooks";
import { AnimationClass } from "@utils/animations";

type Props = {
  title: string;
  backgroundImage: string;
  showButton: boolean;
};

const Banner = (props: Props) => {
  const { title, showButton, backgroundImage } = props;

  const { ref: titleRef } = useAnimationInView({
    class: AnimationClass.pulse,
    threshold: 0,
    repeat: false,
  });

  const { ref: iconRef } = useAnimationInView({
    class: AnimationClass.fadeInLeft,
    threshold: 0,
    repeat: false,
  });

  return (
    <section className="banner-container">
      <div className={`banner ${backgroundImage}`}>
        <h1 className="banner__title animatedOpening" ref={titleRef}>
          {title}
        </h1>

        {showButton && (
          <Button
            type="secondary"
            size="large"
            styles={{ marginRight: "30px" }}
          >
            <img
              className="animatedOpening"
              ref={iconRef}
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
