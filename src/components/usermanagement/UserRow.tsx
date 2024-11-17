import React from 'react';

interface UserRowProps {
  name: string;
  title: string;
  company: string;
  role: string;
  email: string;
  businessPhone: string;
  cellphone: string;
}

const UserRow: React.FC<UserRowProps> = ({ name, title, company, role, email, businessPhone, cellphone }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{title}</td>
      <td>{company}</td>
      <td>N/A</td>
      <td>{role}</td>
      <td>{email}</td>
      <td>{businessPhone}</td>
      <td>{cellphone}</td>
    </tr>
  );
};

export default UserRow;
