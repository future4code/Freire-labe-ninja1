import React from "react";
import styled from "styled-components";

const Home= styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 80vh; 
	padding: 60px 0 0 0;
	background-color: #b6b4b4;
`

const CardContratar= styled.div`
  border: 5px solid #ffffff;
	background-color: #110C3B;
	margin: 0 auto;
	padding: 50px 20px 50px 20px;
	border-radius: 10px;
  display:flex; 
  flex-direction:column;
  justify-content:center;
  align-items:center; 

  p {
    width: 330px;
	text-align: center;
	font-weight: bold;
    font-family: Arial, sans-serif;
    font-size: 22px;
    color: #ffffff;
  }

  button {
    left: 126.5px;
    display: block;
    border-style: none;
    border-radius: 10px;
    width: 206px;
    height: 42px;
	background-color: #FF1823;
    color: #ffffff;
    font-size: 16px;
    line-height: 19px;
    font-weight: bold;
    font-family: Arial, sans-serif;
	margin: 35px auto;
	cursor: pointer;
}

`

const CardCadastro= styled.div`
  border: 5px solid #ffffff;
	background-color: #110C3B;
	margin: 0 auto;
	padding: 50px 20px 50px 20px;
	border-radius: 10px;
  display:flex; 
  flex-direction:column;
  justify-content:center;
  align-items:center; 

  p {
    width: 330px;
	text-align: center;
	font-weight: bold;
    font-family: Arial, sans-serif;
    font-size: 22px;
    color: #ffffff;
  }

  button {
    left: 126.5px;
    display: block;
    border-style: none;
    border-radius: 10px;
    width: 206px;
    height: 42px;
	background-color: #FF1823;
    color: #ffffff;
    font-size: 16px;
    line-height: 19px;
    font-weight: bold;
    font-family: Arial, sans-serif;
	margin: 35px auto;
	cursor: pointer;
}

`
export default class Homepage extends React.Component {

  render () {

    return (
        <Home>
        <CardCadastro>
        <img src='/img/cesta.png'></img>
        <p>Anuncie seus serviços, conquiste novos clientes e impulsione seu potencial em poucos passos</p>
        <button onClick={() => this.props.trocarPagina("form")}>Quero ser um ninja</button>
        </CardCadastro>
        <CardContratar>
        <img src='/img/contrate.png'></img>
        <p>Contrate agora um serviço conosco e desfrute de um bom atendimento com profissionais altamente qualificados </p>
        <button onClick={() => this.props.trocarPagina("list")}>Contratar um ninja</button> 
        </CardContratar>
    </Home>
    );
  }

}
