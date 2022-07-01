import React from "react";
import CarrinhoCard from "../../components/Carrinho/carrinhoCard";

class CarrinhoPage extends React.Component {
    render () {
        const carrinhoSalvar = this.props.carrinho.map ((item)=>{
            return <CarrinhoCard key={item.id} title={item.nome} price={item.preco} id={item.id} deletarCarrinho={this.props.deletarCarrinho} />
        })
        let precoTotal = 0

        this.props.carrinho.forEach((item) => {
            precoTotal += item.preco
        })

        return (
            <div>
                <h2>Meu carrinho</h2>
                <hr/>
                 {carrinhoSalvar.length > 0 ? (
                    <div>
                        {carrinhoSalvar}
                        <span>Total: R${precoTotal.preco}</span>
                        <button onClick={() => this.props.limparCarrinho()}>Finalizar Compra</button>
                        <button onClick={() => this.props.trocarPagina("list")}>Voltar para a Lista</button>
                    </div>
                    ) : (
                    <h3>Ops, Carrinho Vazio!</h3>
                    )} 
            </div>

        )
    }
}

export default CarrinhoPage; 