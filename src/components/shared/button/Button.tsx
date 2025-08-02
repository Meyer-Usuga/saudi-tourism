import "./Button.scss";

type Props = {
  type: "primary" | "secondary";
  size: "small" | "large";
  styles?: React.CSSProperties;
  children: React.ReactNode;
};

const Button = ({ type, size, children, styles }: Props) => {
  return (
    <button className={`button ${type} ${size}`} style={styles}>
      {children}
    </button>
  );
};

export default Button;
