import TrocarNome from "./Components/TrocarNome";

function App() {
  return (
    <div classname="App">
        <h1>Bem vindo(a) ao meu projeto!</h1>
        <h2>Este projeto é feito em React :)</h2>
        {/* <Nome aluno="Felipe" idade={33}/>
        <br/>
        <Nome aluno="Maria" idade={25}/> */}
        <TrocarNome aluno="Aluno"/>
    </div>
  );
}

export default App;

