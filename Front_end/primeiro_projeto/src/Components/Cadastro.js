import React, { useState, useEffect } from "react";

function Formulario() {
  const [nome, setNome] = useState('');
  const [tarefas, setTarefas] = useState([
    "Pagar conta de luz",
    "Estudar programação",
    "Enviar a tarefa"
  ]);
  const [input, setInput] = useState('');
  const [corFundo, setCorFundo] = useState('');

  useEffect(() => {
    const nomeStorage = localStorage.getItem('nome');
    if (!nomeStorage) {
      const nomeUsuario = prompt('Qual o seu nome?');
      if (nomeUsuario) {
        setNome(nomeUsuario);
        localStorage.setItem('nome', nomeUsuario);
      }
    } else {
      setNome(nomeStorage);
    }

    const corFundoStorage = localStorage.getItem('corFundo');
    if (corFundoStorage) {
      setCorFundo(corFundoStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas));
  }, [tarefas]);

  useEffect(() => {
    document.body.style.backgroundColor = corFundo;
    localStorage.setItem('corFundo', corFundo);
  }, [corFundo]);

  function handleRegistro(e) {
    e.preventDefault();
    setTarefas([...tarefas, input]);
    setInput('');
  }

  function handleCorFundoChange(cor) {
    setCorFundo(cor);
  }

  return (
    <div>
      <h1>Cadastro de Tarefas</h1>
      <form onSubmit={handleRegistro}>
        <label>Nome da Tarefa: </label><br />
        <input placeholder="Digite uma tarefa" value={input} onChange={(e) => setInput(e.target.value)} />
        <br />
        <button type="button" onClick={handleRegistro}>
          Registrar
        </button>
      </form>

      <p>{nome}, sua lista de tarefas:</p>

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

      <div>
        <p>Escolha uma cor de fundo:</p>
        <input type="radio" name="cor" value="red" onChange={() => handleCorFundoChange('red')} /> Vermelho
        <input type="radio" name="cor" value="blue" onChange={() => handleCorFundoChange('blue')} /> Azul
        <input type="radio" name="cor" value="green" onChange={() => handleCorFundoChange('green')} /> Verde
      </div>
    </div>
  );
}

export default Formulario;
