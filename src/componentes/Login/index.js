import React, { useState } from "react";

function RegistrationForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      login,
      password,
      role
    };

    try {
      const response = await fetch("http://localhost:8080/login/cadastro", {
        method: "POST",
          headers: {
          "Content-Type": "application/json"
          
        },
        body: JSON.stringify(data)
        
      });
      
      console.log("JSON being sent:", JSON.stringify(data));
      if (response.ok) {
        setMessage(`Cadastro realizado com sucesso`);
      } else {
        setMessage("Falha no cadastro. Por favor, tente novamente.");
      }
    } catch (error) {
      setMessage(`Erro na solicitação: ${error.message}`);
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
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
        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Role
          </label>
          <input
            type="text"
            className="form-control"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Cadastrar
        </button>
      </form>
      <p className="mt-3">{message}</p>
    </div>
  );
}

export default RegistrationForm;