import "./Carousel.scss";

const Carousel = () => {
  return (
    <section className="carousel">
      <div className="carousel__collection">
        <article className="carousel__item">
          <img
            src="https://res.cloudinary.com/db1tp6eqg/image/upload/v1753931741/client-1_ghalxp.svg"
            alt="Customer logo"
            loading="lazy"
          />
        </article>

        <article className="carousel__item">
          <img
            src="https://res.cloudinary.com/db1tp6eqg/image/upload/v1753931741/client-2_krqpu8.svg"
            alt="Customer logo"
            loading="lazy"
          />
        </article>

        <article className="carousel__item">
          <img
            src="https://res.cloudinary.com/db1tp6eqg/image/upload/v1753931742/client-3_b5wa9y.svg"
            alt="Customer logo"
            loading="lazy"
          />
        </article>

        <article className="carousel__item">
          <img
            src="https://res.cloudinary.com/db1tp6eqg/image/upload/v1753931742/client-4_y6ok2o.svg"
            alt="Customer logo"
            loading="lazy"
          />
        </article>
      </div>
    </section>
  );
};

export default Carousel;
