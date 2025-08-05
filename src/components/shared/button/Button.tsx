import "./Button.scss";

type Props = {
  type: "primary" | "secondary";
  size: "small" | "large";
  styles?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({
  type,
  size,
  children,
  className,
  styles,
  onClick,
}: Props) => {
  return (
    <button
      className={`button ${className} ${type} ${size}`}
      style={styles}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
