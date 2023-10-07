import React, { useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const addUser = () => {
    setUsers(prevUsers => [
      ...prevUsers,
      {
        id: prevUsers.length + 1,
        name: 'Himanshu Sharma',  
        email: 'himsharma@example.com'
      }
    ]);
  };

  return (
    <div>
      <h2>User List</h2>
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
