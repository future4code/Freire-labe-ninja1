import React from "react"
import {CardDosProdutos, TextCard} from "./stylesCardProdutos"


export default class CardProdutos extends React.Component {
    render () {

        return (
            <div>
                <CardDosProdutos>
                    <img src={this.props.imagem} alt={this.props.alt}/>
                    <TextCard>
                        <p>{this.props.nome}</p>
                        <p>Preço: R$ {this.props.preco},00</p>
                        {/* <p>{day}/{month}/{year}</p> */}
                        <button onClick={()=> {this.props.irParaDetalhes(this.props.servico.id)}}>Ver Detalhes</button>
                        <button onClick={() => this.props.adicionarCarrinho(this.props.servico)}>Adicionar no Carrinho</button>
                    </TextCard>                        
                </CardDosProdutos>
            </div>
        )
    }

}