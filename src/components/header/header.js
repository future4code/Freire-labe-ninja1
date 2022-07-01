import React from 'react'
import { HeaderContainer } from "./headerStyled"

class Header extends React.Component {

    render() {
        return (
            <HeaderContainer>
                <h1></h1>
                <div>
                    <button>Home</button>
                    <button >Carrinho</button>
                </div>
            </HeaderContainer>
        )
    }
}

export default Header;
