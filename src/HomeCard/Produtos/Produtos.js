import React from "react";
import CardProdutos from "./../CardProdutos/CardProdutos";
import styled from "styled-components";
import colecaoDeProdutos from "../../ColecaoDeProdutos";
import Filtros from "../../components/filtros/Filtros";

const SelectContainer = styled.div`
  border: 1px solid red;
  margin: 10px;
`;
const ElementosCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
`;
export default class Produtos extends React.Component {
  state = {
    filtroMinimo: "",
    filtroMaximo: "",
    filtroBuscaNome: "",
  };
  manipulaValorMinimo = (event) => {
    this.setState({ filtroMinimo: event.target.value });
  };

  manipulaValorMaximo = (event) => {
    this.setState({ filtroMaximo: event.target.value });
  };

  manipulaBuscaNome = (event) => {
    this.setState({ filtroBuscaNome: event.target.value });
  };


  render() {
    let produtosFiltrados = colecaoDeProdutos;

    if (this.state.filtroMinimo) {
      produtosFiltrados = colecaoDeProdutos.filter((produto) => {
        return produto.price >= +this.state.filtroMinimo;
      });
    }

    if (this.state.filtroMaximo) {
      produtosFiltrados = colecaoDeProdutos.filter((produto) => {
        return produto.price <= +this.state.filtroMaximo;
      });
    }

    if (this.state.filtroBuscaNome) {
      produtosFiltrados = colecaoDeProdutos.filter((produto) => {
        return produto.nome
          .toLowerCase()
          .includes(this.state.filtroBuscaNome.toLowerCase());
      });
    }

    produtosFiltrados = produtosFiltrados.map((produto) => {
      return (
        <CardProdutos
          key={produto.id}
          imagem={produto.imagem} 
          nome={produto.nome}
          alt={produto.nome}
          preco={produto.price}
          onclick={() => this.props.onClick(produto)}
        />
      );
    });

    return (
      <div>
        <SelectContainer>
          <Filtros
            minimo={this.state.filtroMinimo}
            maximo={this.state.filtroMaximo}
            nome={this.state.filtroBuscaNome}
            onChangeMinimo={this.manipulaValorMinimo}
            onChangeMaximo={this.manipulaValorMaximo}
            onChangeBuscaNome={this.manipulaBuscaNome}
          />

          <label>Ordenar por:</label>

          <select onChange={this.props.onChangeOrdenacao}>
            <option value="maior-preco">Maior preço</option>
            <option value="menor-preco">Menor preço</option>
            <option value="titulo">Titulo</option>
            <option value="prazo">Prazo</option>
          </select>
        </SelectContainer>

        <ElementosCards>{produtosFiltrados}</ElementosCards>
      </div>
    );
  }
}
