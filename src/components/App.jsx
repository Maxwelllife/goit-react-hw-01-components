import Profile from './Profile';
import user from '../user.json';
import Statistics from './Statistics';
import data from '../data.json';
import FriendsList from './Friends';
import friends from '../friends.json';
import TransactionHistory from './TransactionHistory';
import transactions from '../transactions.json';
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
