import "./Columns.scss";

type Props = {
  children: React.ReactNode[];
};

const Columns = ({ children }: Props) => {
  if (children.length !== 2) {
    return;
  }

  return (
    <>
      <div className="columns">{children}</div>
    </>
  );
};

export default Columns;
