import React, { useState } from 'react';

const FormularioProdutos = () => {
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [custo, setCusto] = useState('');
  const [quantidadeNoEstoque, setQuantidadeNoEstoque] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const produto = {
      descricao,
      categoria,
      custo: parseFloat(custo),
      quantidadeNoEstoque: parseInt(quantidadeNoEstoque, 10)
    };

    const token = localStorage.getItem('token'); // Obter o token do localStorage
    //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzaWd2cyIsInN1YiI6Impvc2UiLCJleHAiOjE2OTk5Mjc2Njl9.oVBYfaW4UIHWMxxg6kA0lBQDAFWuVBVx9An2L3MzAro"

    try {
      const response = await fetch('http://localhost:8080/api/v1/produtos', {
        method: 'POST',
        mode:  'no-cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        },
        body: JSON.stringify(produto)
      });

      if (response.ok) {
        setMensagem('Produto cadastrado com sucesso!');
      } else {
        console.log(token);
        setMensagem('Erro ao cadastrar o produto. Verifique os dados informados.');
      }
    } catch (error) {
      setMensagem('Erro na solicitação. Certifique-se de que o servidor está em execução.');
      console.log(token);
    }
  };

  return (
    <div>
      <h2>Cadastro de Produto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Descrição:
          <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        </label>
        <br />
        <label>
          Categoria:
          <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
        </label>
        <br />
        <label>
          Custo:
          <input type="text" value={custo} onChange={(e) => setCusto(e.target.value)} />
        </label>
        <br />
        <label>
          Quantidade no Estoque:
          <input
            type="text"
            value={quantidadeNoEstoque}
            onChange={(e) => setQuantidadeNoEstoque(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Cadastrar Produto</button>
      </form>
      {mensagem && <div>{mensagem}</div>}
      
    </div>
  );
};

export default FormularioProdutos;
