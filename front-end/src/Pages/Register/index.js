import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function RegisterPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const history = useHistory();

  const http = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 30000,
  });

  const validateEmail = () => {
    const emailIsValid = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
    if (email) {
      const enable = emailIsValid.test(email);
      return enable;
    }
    return false;
  };

  const validateName = () => {
    const min = 12;
    if (name) {
      return name.length >= min;
    }
    return false;
  };

  const validatePassword = () => {
    const min = 6;
    if (password) {
      return password.length >= min;
    }
    return false;
  };

  const handleClick = async () => {
    const body = {
      name,
      email,
      password,
    };
    try {
      const res = await http.post('/users', body);
      console.log(res);
      history.push('/customer/products');
    } catch (error) {
      setErrorMessage(error.message);
      console.error(error.message);
    }
  };

  return (
    <main>
      <h1>
        Cadastro
      </h1>
      <form className="">
        <label htmlFor="name">
          Nome
          <input
            name="name"
            type="text"
            value={ name }
            onChange={ (input) => setName(input.target.value) }
            data-testid="common_register__input-name"
            placeholder="Seu nome"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            name="email"
            type="email"
            value={ email }
            onChange={ (input) => setEmail(input.target.value) }
            data-testid="common_register__input-email"
            placeholder="email@email.com"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            name="password"
            type="password"
            value={ password }
            onChange={ (input) => setPassword(input.target.value) }
            data-testid="common_register__input-password"
            placeholder="************"
          />
        </label>
        <button
          disabled={ !(validatePassword() && validateEmail() && validateName()) }
          type="button"
          onClick={ () => handleClick() }
          data-testid="common_register__button-register"
        >
          CADASTRAR
        </button>
      </form>
      <span
        data-testid="common_login__element-invalid-email"
        className="error"
      >
        { errorMessage }
      </span>
    </main>
  );
}

export default RegisterPage;
