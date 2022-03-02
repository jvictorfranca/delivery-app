import React, { useState } from 'react';

import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(0);

  const http = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 30000,
  });

  async function login() {
    try {
      const response = await http.post('/login',
        {
          email,
          password,
        });
      console.log(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main>
      Login
      <input
        data-testid="common_login__input-email"
        placeholder="digite o email"
        onChange={ (event) => setEmail(event.target.value) }
      />
      <input
        data-testid="common_login__input-password"
        placeholder="digite a senha"
        onChange={ (event) => setPassword(event.target.value) }
      />
      <button
        onClick={ login }
        data-testid="common_login__button-login"
        type="button"
      >
        LOGIN
      </button>
      <button
        data-testid="common_login__button-register"
        type="button"
      >
        Ainda não tenho conta
      </button>
    </main>
  );
}

export default LoginPage;

/* const email = JSON.parse(localStorage.getItem('state')).player.gravatarEmail; */

/* {
  email: 'lewishamilton@gmail.com',
  password: '--adm2@21!!--',
}); */

/* async function getUser() {
  try {
    const response = await http.get('/users');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
} */
