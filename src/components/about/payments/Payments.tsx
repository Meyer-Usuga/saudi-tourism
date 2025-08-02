import "./Payments.scss";

const Payments = () => {
  return (
    <section className="payments">
      <h1 className="payments__title">Currency & Payments</h1>

      <div className="payments__content">
        <article className="payments__item">
          <h2>Currency Exchange</h2>
          <p>
            You can send or receive money in Saudi Arabia by transferring funds
            online or through a bank that offers fast money transfer services,
            all of which are subject to the rules and regulations of the Saudi
            Arabian Monetary Authorit
          </p>
        </article>

        <article className="payments__item">
          <h2>Send and receive money</h2>
          <p>
            All banks in the kingdom offer currency exchange services. Exchange
            bureaus are located at airports, some shopping centers and various
            other locations throughout the country.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Payments;
