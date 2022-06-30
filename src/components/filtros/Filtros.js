import React from "react";
import styled from "styled-components";
import pacoteDeProdutos from "../ProdutosTeste/PacoteDeProdutos"

const BoxFiltro = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

 class Filtros extends React.Component {
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

      const produtosFiltradosMin = pacoteDeProdutos.filter(produto =>{
        if (this.state.filtroMinimo)
          return produto.price >= this.state.filtroMinimo
        }
      )
      const produtosFiltradosMax = pacoteDeProdutos.filter(produto =>{
        if (this.state.filtroMinimo)
          return produto.price <= this.state.filtroMaximo
        }
      )


    
        return <BoxFiltro>

           <label>Filtro Mínimo:
            <input type={"number"}
            value={this.props.minimo}
            onChange={this.props.onChangeMinimo}/>
           </label>

           <label>Filtro Máximo:
            <input type={"number"}
            value={this.props.maximo}
             onChange={this.props.onChangeMaximo}/>
           </label>

           <label>Busca por nome:
            <input type={"text"}
             value={this.props.busca}
             onChange={this.props.onChangeBuscaNome}/>
           </label>

        </BoxFiltro>;

  }
}
export default Filtros;
