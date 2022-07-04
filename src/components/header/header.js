import React from 'react'
// import { HeaderContainer } from "./headerStyled"
import styled from "styled-components" 


export const HeaderContainer = styled.div`
    border: 1px solid black;
    background-color: #110C3B;
    padding: 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    height: 100vh;
    width: 100%;

    img {
        width: 35em; 
    }
   
`

export const HeaderSobreposto = styled.div`
    padding: 0 0;
    display: flex;
    clip-path: polygon(0 0, 52% 0, 100% 100%, 0 100%);
	width: 50%;
	background-color: #35356E;

`

export const TituloHeader = styled.div`

    background-color: #110C3B;
	width: 50%;
    display: inline-block;
    vertical-align: middle;
	margin: 100px 0px;

    h1{

	font-family: Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 36px;
	font-weight: bolder;
	width: 400px;
	color:#FF1823;
	margin: 50px 200px;
}

    p {
        width: 400px;
        margin: 50px 200px;
    }
`

const BotoesNav = styled.div`
    display: flex;
	margin-bottom: 500px;
    margin-left: 950px;
    position: absolute;
    
    button {
    font-size: 3vh; 
    font-family: Georgia, 'Times New Roman', Times, serif;
    background-color:transparent;
    text-decoration: none;
    border:none;
    color:white;
    height: 5em;

        :hover {
	color: #FF1823;
	text-decoration: underline;
    ; 
    }
}
    
`


class Header extends React.Component {

    render() {
        return (
            <HeaderContainer>
                <BotoesNav>
                    <button onClick={() => this.props.trocarPagina("home")} >HOME</button>
                    <button onClick={() => this.props.trocarPagina("cart")} >CARRINHO</button>
                </BotoesNav>
                <HeaderSobreposto>
                <img src='/img/Labeninja.png'></img>
                </HeaderSobreposto>
                <TituloHeader>
                    <h1>Vender e contratar no Labeninja é muito mais fácil que você imagina</h1>
                    <p>Pare de perder tempo procurando, ofereça ou contrate serviços com a Labeninja e garanta os melhores profissionais em sua equipe!</p>
                </TituloHeader> 
            </HeaderContainer>
        )
    }
}

export default Header;
