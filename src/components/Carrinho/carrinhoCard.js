import React from "react";
import { ConjuntoCarrinho } from './carrinhoStyled'

class CarrinhoCard extends React.Component  {
    render () {
        return (
            <ConjuntoCarrinho>
            <p>{this.props.nome}</p>
            <p>R$ {this.props.preco} ,00</p>
            <button onClick={() => {this.props.removerCarrinho(this.props.id)}}>Remover</button>
        </ConjuntoCarrinho>
        )
    }
}

export default CarrinhoCard; 

