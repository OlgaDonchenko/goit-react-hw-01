import Profile from "../Profile/Profile";
import userDate from "../Profile/userData.json";
import css from "./App.module.css";
import FriendList from "../FriendList/FriendList";
import FriendItem from "../FriendItem/FriendItem";
import friends from "../FriendList/friend.json";
import TransactionsHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../TransactionHistory/transactions.json";

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
      <FriendList friends={friends} />
      <TransactionsHistory transactions={transactions} />
    </>
  );
}
