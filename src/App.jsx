import "./App.css";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "./components/Profile/userData.json";
import allFriend from "./components/FriendList/friends.json";
import transactions from "./components/TransactionHistory/transactions.json";

function App() {
  return (
    <>
      <Profile userData={userData} />
      <FriendList friends={allFriend} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
