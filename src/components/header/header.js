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
    /* height: 100vh; */


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
	margin: 50px 250px;
}

    p {
        width: 400px;
        margin: 50px 250px;
    }

    button {
	left: 126.5px;
    display: block;
    border-style: none;
    border-radius: 10px;
    width: 206px;
    height: 42px;
    background: #FF1823;
    color: #ffffff;
    font-size: 16px;
    line-height: 19px;
    font-weight: bold;
    font-family: Arial, sans-serif;
    margin: 35px auto;
    cursor: pointer; 
}
`

const BotoesNav = styled.div`
    background-color: green; 
    
`


class Header extends React.Component {

    render() {
        return (
            <HeaderContainer>
                <HeaderSobreposto>
                <img src='/img/Labeninja.png'></img>
                </HeaderSobreposto>
                <TituloHeader>
                    <h1>Vender e contratar no Labeninja é muito mais fácil que você imagina</h1>
                    <p>Pare de perder tempo procurando, ofereça ou contrate serviços com a Labeninja e garanta os melhores profissionais em sua equipe!</p>
                    <button onClick={() => this.props.trocarPagina("cart")} >Carrinho</button>
                </TituloHeader> 
                <BotoesNav>
                    <button onClick={() => this.props.trocarPagina("home")} >Home</button>
                    <button onClick={() => this.props.trocarPagina("cart")} >Carrinho</button>
                </BotoesNav>
            </HeaderContainer>
        )
    }
}

export default Header;
