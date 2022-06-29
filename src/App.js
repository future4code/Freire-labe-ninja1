import React from "react";
import Header from '../src/components/header/header';
import Homepage from "./pages/HomePage/Homepage";
import Filtros from "./components/Filtros";


class App extends React.Component {
  state={
    filtroMinimo: 0,
    filtroMaximo: 10000000000,
    filtroBuscaNome: ""
  }
  manipulaValorMinimo = (event) =>{

  this.setState({filtroMinimo:event.target.value})
  }

  manipulaValorMaximo = (event) =>{

  this.setState({filtroMaximo:event.target.value})
  }

  manipulaBuscaNome = (event) =>{

  this.setState({filtroBuscaNome:event.target.value})
  }


  render () {
    return (
      <div className="App">

        <Header/>
        
      <Homepage/>

      <Filtros
      minimo={this.state.filtroMinimo} 
      maximo={this.state.filtroMaximo}
      nome={this.state.filtroBuscaNome}
      
      onChangeMinimo={this.state.manipulaValorMinimo}
      onChangeMaximo={this.state.manipulaValorMaximo}
      onChangeBuscaNome={this.state.manipulaBuscaNome}
      />
      </div>
    );
  }

}

export default App;
