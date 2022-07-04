import React from "react"
import {CardDosProdutos, TextCard} from "./stylesCardProdutos"


export default class CardProdutos extends React.Component {
    render () {

        return (
            <div>
                <CardDosProdutos>
                    <img src={this.props.imagem} alt={this.props.alt}/>
                    <TextCard>
                        <h3>{this.props.nome}</h3>
                        <p>Preço: R$ {this.props.preco},00</p>
                        <p>Disponível até:</p>
                        <p> {this.props.dueDate} </p>
                        <p>{this.props.description}</p>
                        {/* <button onClick={()=> {this.props.irParaDetalhes(this.props.servico.id)}}>Ver Detalhes</button> */}
                        <button onClick={() => {this.props.adicionarCarrinho(this.props.servico)}}>Adicionar no Carrinho</button>
                    </TextCard>                        
                </CardDosProdutos>
            </div>
        )
    }

}