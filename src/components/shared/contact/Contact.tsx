import { useAnimationInView } from "@utils/hooks";
import { AnimationClass } from "@utils/animations";
import { Button } from "@components/shared";
import "./Contact.scss";

const Contact = () => {
  const buttonStyles = {
    color: "#047E01",
    padding: "20px",
    borderRadius: "16px",
    width: "100%",
    maxWidth: "150px",
  };

  const { ref } = useAnimationInView({
    class: AnimationClass.shakeX,
    threshold: 0.5,
    repeat: false,
  });

  return (
    <section className="contact">
      <article className="contact__card" ref={ref}>
        <p>Contact us on Whatsapp</p>
        <Button type="primary" size="small" styles={buttonStyles}>
          <span>Start Chat</span>
        </Button>
      </article>
    </section>
  );
};

export default Contact;
