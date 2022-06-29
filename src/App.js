import React from "react";
import Header from '../src/components/header/header'
import cadastro from './components/Cadastro/cadastro';


class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Header/>


        <CadastroServico />
  
      </div>
    );
  }

}

export default App;
