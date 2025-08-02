import Button from "@components/shared/button/Button";
import "./Contact.scss";

const Contact = () => {
  const buttonStyles = {
    color: "#047E01",
    padding: "20px",
    borderRadius: "16px",
    width: "100%",
    maxWidth: "150px",
  };

  return (
    <section className="contact">
      <article className="contact__card">
        <p>Contact us on Whatsapp</p>
        <Button type="primary" size="small" styles={buttonStyles}>
          <span>Start Chat</span>
        </Button>
      </article>
    </section>
  );
};

export default Contact;
