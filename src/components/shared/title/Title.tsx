import "./Title.scss";

type Props = {
  title: string;
  subtitle: string;
};

const Title = ({ title, subtitle }: Props) => {
  return (
    <div className="title">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Title;
