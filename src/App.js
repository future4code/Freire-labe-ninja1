import React from "react";
import Header from "../src/components/header/header";
import Homepage from "./pages/HomePage/homepage";
import Produtos from "./HomeCard/Produtos/Produtos";
import Footer from '../src/components/Footer/Footer';
import {createGlobalStyle} from 'styled-components';
import CadastroServico from "./components/Cadastro/cadastro";

const EstiloPadrao = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
  }`

export default class App extends React.Component {
  state = {
    paginaAtual: "home", 
  };
  
  trocarPagina = (NomePagina) => {
    this.setState({ paginaAtual: NomePagina })
  }

escolherPagina = () => {
  switch (this.state.paginaAtual) {
    case "home": 
    return <Homepage trocarPagina= {this.trocarPagina}/>
    case "list": 
    return <Produtos/>
    // case "cart":
    // return <Carrinho/>
    case "form":
      return <CadastroServico />
      default:
        return <Homepage trocarPagina={this.trocarPagina} />
  }

}

  render() {

       return (
      <div className="App">
      <EstiloPadrao/>
        <Header trocarPagina= {this.trocarPagina} />
        {this.escolherPagina()}
        <Footer/>
      </div>
    );
  }
}
{/* <Homepage /> */}