import React from "react";
import styled from "styled-components";

const BoxFiltro = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

 class Filtros extends React.Component {
  
    render() {
    
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
