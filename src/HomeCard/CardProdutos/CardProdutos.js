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
                        <p>R$ {this.props.preco},00</p>
                        <button onClick={this.props.onClick}>Detalhes do Produto</button>
                        <button onClick={this.props.onClick}>Adicionar no Carrinho</button>
                    </TextCard>
                                                        
                </CardDosProdutos>
            </div>
        )
    }

}