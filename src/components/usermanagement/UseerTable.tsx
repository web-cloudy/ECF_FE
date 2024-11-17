import React from 'react';
import UserRow from './UserRow';

const users = [
  { name: 'Floyd Miles', title: 'Processor', company: 'PL Finance', role: 'Developer', email: 'example@ecf.com', businessPhone: '(316) 555-0116', cellphone: '(406) 555-0120' },
  // Add more user data as needed
];

const UserTable: React.FC = () => {
  return (
    <table className="user-table w-full mt-4">
      <thead>
        <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Company</th>
          <th>Group</th>
          <th>Role</th>
          <th>Email</th>
          <th>Business Phone</th>
          <th>Cellphone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <UserRow key={index} {...user} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
