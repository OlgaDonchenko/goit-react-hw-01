import clsx from "clsx";
import css from "./FriendItem.module.css";
export default function FriendItem({ friend: { name, avatar, isOnline } }) {
  return (
    <>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.username}>{name}</p>

      <p
        className={clsx(css["statusIsOnline"], {
          [css.online]: isOnline,
          [css.offline]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
}
