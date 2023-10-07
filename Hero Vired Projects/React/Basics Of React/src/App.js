import React from 'react';
import UserList from './UserList';
import Product from './Product';
import FilteredUsers from './FilteredUsers';

const App = () => {
  const users = [
    { id: 1, name: 'Shreya', email: 'Shreya@example.com' },
    { id: 2, name: 'Rahul', email: 'Rahul@example.com' },
    { id: 3, name: 'Aditya', email: 'Aditya@example.com' },
  ];

  return (
    <>
      <UserList />
      <Product />
      <FilteredUsers users={users} />
    </>
  );
};

export default App;
