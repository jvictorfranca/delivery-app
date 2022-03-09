import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const [errorMessage, setErrorMessage] = useState('');

  const { token } = JSON.parse(localStorage.getItem('user'));
  const http = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 30000,
  });

  /* const { name, email, password, role } = user; */

  async function register() {
    try {
      const response = await http.post('/admin/user',
        {
          name,
          email,
          password,
          role,
        }, { headers: { authorization: token } });

      console.log(response.data);
    } catch (error) {
      setErrorMessage(error.message);
      console.error(error.message);
    }
    window.location.reload();
  }
  const validateName = () => {
    const min = 12;
    if (name.length >= min) return true;
    return false;
  };

  const validateEmail = () => {
    const emailIsValid = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
    const enable = emailIsValid.test(email);
    if (enable) return true;
    return false;
  };

  const validatePassword = () => {
    const min = 6;
    if (password.length >= min) return true;
    return false;
  };

  return (
    <div>
      <form name="register">
        <label htmlFor="register">
          Nome
          <input
            data-testid="admin_manage__input-name"
            onChange={ (event) => setName(event.target.value) }
          />
        </label>
        <label htmlFor="register">
          Email
          <input
            data-testid="admin_manage__input-email"
            onChange={ (event) => setEmail(event.target.value) }
          />
        </label>
        <label htmlFor="register">
          Senha
          <input
            data-testid="admin_manage__input-password"
            onChange={ (event) => setPassword(event.target.value) }
          />
        </label>
        <label htmlFor="register">
          Tipo
          <select
            defaultValue="customer"
            data-testid="admin_manage__select-role"
            onChange={ (event) => setRole(event.target.value) }
          >
            <option value="customer">Consumidor</option>
            <option value="seller">Vendedor</option>
            <option value="administrator">Administrador</option>
          </select>
        </label>
        <button
          data-testid="admin_manage__button-register"
          type="button"
          onClick={ register }
          disabled={ !(validateEmail() && validatePassword() && validateName()) }
        >
          Cadastrar
        </button>
      </form>
      <br />
      <span
        data-testid="admin_manage__element-invalid-register"
        className="error"
      >
        { errorMessage }
      </span>
    </div>

  );
}

export default Form;
