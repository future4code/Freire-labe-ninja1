import React from "react";
import { ConjuntoCarrinho } from './carrinhoStyled'

const CarrinhoCard = (props) => {
    return (
        <ConjuntoCarrinho>
            <p>{this.props.nome}</p>
            <p>R$ {this.props.preco}</p>
            <button onClick={() => this.props.removerCarrinho(props.id)}>Remover</button>
            <button onClick={() => this.props.trocarPagina("list")}>Voltar para a Lista</button>
        </ConjuntoCarrinho>
    )
}
export default CarrinhoCard; 
