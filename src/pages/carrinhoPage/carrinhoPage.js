import React from "react";
import CarrinhoCard from "../../components/Carrinho/carrinhoCard";
import styled from 'styled-components'


const DadosDoCarrinho = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
div{
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        margin: 10px;
        width: 140px;
    }
}
`
class CarrinhoPage extends React.Component {
    render () {
        const carrinhoSalvar = this.props.carrinho.map ((item)=>{
            return <CarrinhoCard key={item.id} nome={item.nome} preco={item.preco} id={item.id} removerCarrinho={this.props.removerCarrinho} />
        })
        let precoTotal = 0
        this.props.carrinho.forEach((produto) => {
            precoTotal += produto.preco
        })

        return (
            <div>
                 {carrinhoSalvar.length > 0 ? (
                    <div>
                        {carrinhoSalvar}
                        <DadosDoCarrinho>
                        <p>Total: R${precoTotal}</p>
                        <div>
                        <button onClick={() => this.props.limparCarrinho()}>Finalizar Compra</button>
                        <button onClick={() => this.props.trocarPagina("list")}>Voltar para opções de serviços</button>
                    </div>
                    </DadosDoCarrinho>
                    </div>
                    ) : (
                    <h3>Ops, Carrinho Vazio!</h3>
                    )} 
            </div>
        )
    }
}

export default CarrinhoPage; 