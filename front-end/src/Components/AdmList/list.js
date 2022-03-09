import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Body from '../AdmBody/body';

function List() {
  const [users, setUsers] = useState([]);
  const http = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 30000,
  });

  async function getUsers() {
    const response = await http.get('/users');
    return response.data;
  }

  useEffect(() => {
    const allUsers = async () => {
      const takeUsers = await getUsers();
      const filterUsers = takeUsers.filter(
        (user) => (user.role === 'customer' || user.role === 'seller'),
      );
      setUsers(filterUsers);
    };
    allUsers();
  });

  console.log(users);

  async function onClick(email) {
    try {
      const response = await http.delete('/users', { data: { email } });
      window.location.reload();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      Lista de usuários
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          { users.map((user, index) => (
            <Body
              key={ user.id }
              user={ user }
              index={ index }
              onClick={ onClick }
            />
          ))}
        </tbody>
      </table>
    </div>

  );
}

export default List;
