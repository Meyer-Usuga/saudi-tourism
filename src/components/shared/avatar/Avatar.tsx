import "./Avatar.scss";

type Props = {
  name: string;
  info: string | undefined;
  icon: string;
};

const Avatar = (props: Props) => {
  const { name, info, icon } = props;

  return (
    <div className="avatar">
      <img src={icon} alt="Avatar of the person" loading="lazy" />
      <div className="avatar__info">
        <h5>{name}</h5>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default Avatar;
