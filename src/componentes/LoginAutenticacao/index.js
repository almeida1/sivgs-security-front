import React, { useState } from 'react';

function LoginForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      login,
      password
    };

    try {
      const response = await fetch('http://localhost:8080/login/autenticacao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        setToken(result.token);
        // Aqui você pode armazenar o token em localStorage ou sessionStorage:
        // localStorage.setItem('token', result.token);
        // sessionStorage.setItem('token', result.token);
      } else {
        // Handle authentication error
        console.log('Falha na autenticação');
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
      setMessage(`Erro na solicitação: ${error.message}`);
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="login" className="form-label">
            Login
          </label>
          <input
            type="text"
            className="form-control"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      {token && <p>Token: {token}</p>}
      
    </div>
  );
}

export default LoginForm;
