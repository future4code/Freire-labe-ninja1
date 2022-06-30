import React from "react";
import Header from '../src/components/header/header'
import Cadastro from '../src/components/Cadastro/cadastro';


class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Header/>


        <Cadastro />
  
      </div>
    );
  }

}

export default App;
