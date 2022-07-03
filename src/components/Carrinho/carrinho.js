import React from 'react';
import { ConjuntoCarrinho} from './carrinhoSyled'
import Itens from './Itens/Itens'


class Carrinho extends React.Component{
    state = {
        carrinho: [],
        valorTotal: 0

    };

    // adicionarItemCarrinho = (item) => {

    // }

    // removerItemCarrinho = (item) => {
        

    // }

    render() {
        const itensCarrinho = this.props.carrinho && this.props.carrinho.map(item => {
            return <Itens
            quantidade={item.quantidade}
            nome={item.nome}
            onClick = {()=> this.props.removerItemCarrinho(item)}
            />
        })    
    
    return( <ConjuntoCarrinho>
        <h2>Carrinho:</h2>
            <div>
            
            {itensCarrinho }
            
            </div>

        <p>Valor total: R$ {this.props.valorTotal},00 </p>
    </ConjuntoCarrinho>
        
    )
    }
}

export default Carrinho;