import { Button } from "@components/shared/button";
import "./Essentials.scss";
import { Columns } from "@components/shared/columns";
import { AnimationClass } from "@utils/animations";
import { useAnimationInView } from "@utils/hooks";

const Essentials = () => {
  const { ref: firstColumn } = useAnimationInView({
    class: AnimationClass.fadeInUp,
    threshold: 0.5,
    repeat: false,
  });

  const { ref: secondColumn } = useAnimationInView({
    class: AnimationClass.fadeInUp,
    threshold: 0.5,
    repeat: false,
  });

  const buttonIcon = () => {
    return (
      <Button type="secondary" size="small">
        <img
          src="https://res.cloudinary.com/db1tp6eqg/image/upload/v1754022195/arrow_z3jr2d.svg"
          alt="Button icon"
        />
      </Button>
    );
  };

  return (
    <div className="essentials-container">
      <h1>Travel Essentials</h1>
      <Columns>
        <article className="essential bg-first">
          <div className="essential__card animatedOpening" ref={firstColumn}>
            <p>About Saudi</p>
            {buttonIcon()}
          </div>
        </article>

        <article className="essential bg-second">
          <div className="essential__card animatedOpening" ref={secondColumn}>
            <p>Safety Travel Tips</p>
            {buttonIcon()}
          </div>
        </article>
      </Columns>
    </div>
  );
};

export default Essentials;
