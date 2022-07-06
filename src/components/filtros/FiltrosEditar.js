import React from "react";
import Header from "../src/components/header/header";
import Homepage from "./pages/HomePage/homepage";
import Filtros from "./components/filtros/Filtros";
import Footer from '../src/components/Footer/Footer';

export default class App extends React.Component {
  state = {
    filtroMinimo: "",
    filtroMaximo: "",
    filtroBuscaNome: "",
  };
  manipulaValorMinimo = (event) => {
    this.setState({filtroMinimo: event.target.value});
  };

  manipulaValorMaximo = (event) => {
    this.setState({filtroMaximo: event.target.value});
  };

  manipulaBuscaNome = (event) => {
    this.setState({filtroBuscaNome: event.target.value});
  };

  render() {

       return (
      <div className="App">
        <Header />
        <Homepage />
        <Footer/>
        <Filtros
          minimo={this.state.filtroMinimo}
          maximo={this.state.filtroMaximo}
          nome={this.state.filtroBuscaNome}
          onChangeMinimo={this.manipulaValorMinimo}
          onChangeMaximo={this.manipulaValorMaximo}
          onChangeBuscaNome={this.manipulaBuscaNome}
        />

      </div>
    );
  }
}

