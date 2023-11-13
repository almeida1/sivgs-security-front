import React, { useState } from 'react';
import Login from '../Login'; // Importe o componente Login
import LoginAutenticacao from '../LoginAutenticacao'; // Importe o componente LoginAutenticacao

function Menu() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="container mt-4">
      <div className="btn-group">
        <button className="btn btn-primary" onClick={() => handleOptionClick('Login')}>
          Opção 1 - Login
        </button>
        <button className="btn btn-primary" onClick={() => handleOptionClick('LoginAutenticacao')}>
          Opção 2 - Login Autenticação
        </button>
      </div>

      <div className="mt-4">
        {selectedOption === 'Login' && <Login />} {/* Renderiza o componente Login quando a opção 1 é selecionada */}
        {selectedOption === 'LoginAutenticacao' && <LoginAutenticacao />} {/* Renderiza o componente LoginAutenticacao quando a opção 2 é selecionada */}
      </div>
    </div>
  );
}

export default Menu;
