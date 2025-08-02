import { Button } from "@components/shared/button";
import "./Essentials.scss";

const Essentials = () => {
  return (
    <div className="essentials-container">
      <h1>Travel Essentials</h1>
      <div className="essentials-collections">
        <article className="essential bg-first ">
          <div className="essential__card">
            <p>About Saudi</p>

            <Button type="secondary" size="small">
              <img
                src="https://res.cloudinary.com/db1tp6eqg/image/upload/v1754022195/arrow_z3jr2d.svg"
                alt="Button icon"
              />
            </Button>
          </div>
        </article>

        <article className="essential bg-second ">
          <div className="essential__card">
            <p>Safety Travel Tips</p>

            <Button type="secondary" size="small">
              <img
                src="https://res.cloudinary.com/db1tp6eqg/image/upload/v1754022195/arrow_z3jr2d.svg"
                alt="Button icon"
              />
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Essentials;
