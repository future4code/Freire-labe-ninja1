import React from "react"
import CardProdutos from "./../CardProdutos/CardProdutos"
import styled from "styled-components"
import colecaoDeProdutos from "../../ColecaoDeProdutos"

const SelectContainer = styled.div`
border: 1px solid red;
margin: 10px;

`
const ElementosCards = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 10px;
margin-top: 10px;

`


export default class Produtos extends React.Component {
    render () {
        console.log(colecaoDeProdutos)
        const produtosMapeados = colecaoDeProdutos.map((produto) => {
            return (
                <CardProdutos key={produto.id}
                 imagem={produto.imagem}
                 nome = {produto.nome}
                 alt= {produto.nome}
                 preco={produto.price}
                 onclick={() => this.props.onClick(produto)}
                />
            )
        })
        return (
            <div>  
                <SelectContainer>
                    <label>Ordenar por:</label>
                        
                    <select onChange={this.props.onChangeOrdenacao}>
                        <option value="maior-preco">Maior preço</option>
                        <option value="menor-preco">Menor preço</option>
                        <option value="titulo">Titulo</option>
                        <option value="prazo">Prazo</option>
                    </select>
                </SelectContainer> 

                <ElementosCards>
                    {produtosMapeados}
                </ElementosCards> 
            </div>         
              
        )
    }
}               