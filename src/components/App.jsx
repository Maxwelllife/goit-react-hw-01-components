import 'modern-normalize/modern-normalize.css';
import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';
import FriendsList from './Friends/Friends';
import friends from './Friends/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';
export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        imageUrl={user.avatar}
        stats={user.stats}
      />
      <Statistics data={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
