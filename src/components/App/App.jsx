import Profile from "../Profile/Profile";
import userDate from "../Profile/userData.json";
import css from "./App.module.css";

export default function App() {
  return (
    <>
      <Profile
        username={userDate.username}
        tag={userDate.tag}
        location={userDate.location}
        avatar={userDate.avatar}
        stats={userDate.stats}
      />
    </>
  );
}
