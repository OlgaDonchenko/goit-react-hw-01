import css from "./Profile.module.css";

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profileCard}>
      <div className={css.profileInformation}>
        <img className={css.image} src={avatar} alt="User avatar" />
        <p className={css.profileName}>{username}</p>
        <p className={css.profileText}>
          {"\u0040"}
          {tag}
        </p>
        <p className={css.profileText}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span className={css.profileSpan}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views</span>
          <span className={css.profileSpan}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span>
          <span className={css.profileSpan}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
