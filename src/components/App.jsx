import React from 'react';
import Profile from './Profiles/Profile';
import Statistics from './Statictics/Statistics';
import FriendList from './Friends/FriendList';
import TransactionHistory from './Transactions/TransactionHistory';
import user from '../../src/user.json';
import data from './Statictics/data.json';
import friends from './Friends/friends.json'
import transactions from './Transactions/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        backgroundColor: '#afb6b8',
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'center',
        padding: '15px',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </div>
  );
};
