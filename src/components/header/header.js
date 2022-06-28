import React from 'react'
import { HeaderContainer } from "./styled"


class Header extends React.Component {

    render() {
        return (
            <HeaderContainer>
                <h2>LabeNinjas</h2>
                <div>
                    <button >Home</button>
                    <button >Carrinho</button>
                </div>
            </HeaderContainer>
        )
    }
}

export default Header
