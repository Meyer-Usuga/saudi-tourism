import "./Button.scss";

type Props = {
  type: "primary" | "secondary";
  size: "small" | "large";
  children: React.ReactNode;
};

const Button = ({ type, size, children }: Props) => {
  return <button className={`button ${type} ${size}`}>{children}</button>;
};

export default Button;
