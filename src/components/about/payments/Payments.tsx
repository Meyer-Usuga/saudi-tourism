import { Columns } from "@components/shared";
import "./Payments.scss";

const Payments = () => {
  const firstContent = {
    title: "Currency Exchange",
    paragraph:
      "You can send or receive money in Saudi Arabia by transferring funds online or through a bank that offers fast money transfer services, all of which are subject to the rules and regulations of the Saudi Arabian Monetary Authorit",
  };

  const secondContent = {
    title: "Send and receive money",
    paragraph:
      "All banks in the kingdom offer currency exchange services. Exchange bureaus are located at airports, some shopping centers and various other locations throughout the country.",
  };

  return (
    <section className="payments">
      <h1 className="payments__title">Currency & Payments</h1>

      <Columns>
        <article className="payments__item">
          <h2>{firstContent.title}</h2>
          <p>{firstContent.paragraph}</p>
        </article>

        <article className="payments__item">
          <h2>{secondContent.title}</h2>
          <p>{secondContent.paragraph}</p>
        </article>
      </Columns>
    </section>
  );
};

export default Payments;
