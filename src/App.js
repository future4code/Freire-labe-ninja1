import React from "react";
import Header from "../src/components/header/header";
import Homepage from "./pages/HomePage/Homepage";
import Filtros from "./components/Filtros";
import {createGlobalStyle} from 'styled-components'

const EstiloPadrao = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
  }`



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
      <EstiloPadrao/>
        <Header />
        <Homepage />

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

