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
      <section className="columns">{children}</section>
    </>
  );
};

export default Columns;
