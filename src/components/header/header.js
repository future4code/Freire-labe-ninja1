import React from 'react'
import { HeaderContainer } from "./headerStyled"

class Header extends React.Component {

    render() {
        return (
            <HeaderContainer>
                <h2>LabeNinjas</h2>
                <div>
                    <button onClick={() => this.props.trocarPagina("home")} >Home</button>
                    <button onClick={() => this.props.trocarPagina("cart")} >Carrinho</button>
                </div>
            </HeaderContainer>
        )
    }
}

export default Header;
