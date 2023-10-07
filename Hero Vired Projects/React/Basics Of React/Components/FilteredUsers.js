import React from 'react';

const FilteredUsers = ({ users }) => {
  const filteredUsers = users.filter(user => user.name.startsWith('A'));

  return (
    <div>
      <h2>Filtered Users</h2>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredUsers;
