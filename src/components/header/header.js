import React from 'react'
import { HeaderContainer } from "./styled"


class Header extends React.Component {

    render() {
        return (
            <HeaderContainer>
                <h2>LabeNinjas</h2>
                <div>
                    <button >Home</button>
                    <img src="/img/carrinho.png" alt="Icone de um carrinho de compras" />
                </div>
            </HeaderContainer>
        )
    }
}

export default Header
