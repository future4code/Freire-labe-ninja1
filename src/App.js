import React from "react";
import Header from "../src/components/header/header";
import Homepage from "./pages/HomePage/homepage";
import Produtos from "./HomeCard/Produtos/Produtos";
import Footer from '../src/components/Footer/Footer';
import {createGlobalStyle} from 'styled-components';
import CadastroServico from "./components/Cadastro/cadastro";
import CarrinhoPage from "./pages/carrinhoPage/carrinhoPage";
//ok
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
    detalhesDoServico: "",
    carrinho: []
  };
  
  trocarPagina = (NomePagina) => {
    this.setState({ paginaAtual: NomePagina })
  }

  adicionarCarrinho = (produto) => {
    const novoCarrinho = [...this.state.carrinho, produto]
    this.setState({carrinho: novoCarrinho})
    alert(`O serviço ${produto.nome} foi adicionado ao carrinho`)
  }

  removerCarrinho = (id) => {
    const deletar = window.confirm("Tem certeza que deseja remover este serviço?")
    if (deletar){
      const novoCarrinho = this.state.carrinho.filter((itemCarrinho) => {
        return itemCarrinho.id !== id
      })
      this.setState({carrinho: novoCarrinho})
    }
  }

  limparCarrinho = () => {
    this.setState({carrinho: []})
    alert("Obrigado em contratar nossos serviços!")
  }

escolherPagina = () => {
  switch (this.state.paginaAtual) {
    case "home": 
    return <Homepage trocarPagina= {this.trocarPagina}/>
    case "list": 
    return <Produtos adicionarCarrinho={this.adicionarCarrinho}/>
    case "cart":
    return <CarrinhoPage trocarPagina={this.trocarPagina} carrinho={this.state.carrinho} removerCarrinho={this.removerCarrinho} limparCarrinho={this.limparCarrinho}/>
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