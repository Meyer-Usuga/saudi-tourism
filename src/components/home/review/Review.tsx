import { Avatar } from "@components/shared";
import { useAnimationInView } from "@utils/hooks";
import { AnimationClass } from "@utils/animations";
import "./Review.scss";

const Review = () => {
  const { ref } = useAnimationInView({
    class: AnimationClass.lightSpeedInRight,
    threshold: 0,
    repeat: false,
  });

  return (
    <section className="review">
      <article ref={ref} className="review__header animatedOpening">
        <div className="review__titles">
          <h1>Hisma</h1>
          <h2>Desert</h2>
        </div>
        <div className="review__autor">
          <Avatar
            name="Wazeem Al Mulk"
            info="Traveler"
            icon="https://res.cloudinary.com/db1tp6eqg/image/upload/v1753934976/card-1-icon_azuw4t.svg"
          />
        </div>
      </article>
      <article className="review__content">
        <p>
          The Hisma Desert in Saudi Arabia is a realm of ethereal beauty that
          captivates the senses. Its vast expanse of golden sand dunes, sculpted
          by the winds of time, creates a mesmerizing landscape that stretches
          as far as the eye can see. As the sun sets, painting the sky with
          vivid hues.
        </p>
      </article>
    </section>
  );
};

export default Review;
