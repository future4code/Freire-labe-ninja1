import React from "react";
import styled from "styled-components";

const Home= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 80vh; 
`

const Botoes= styled.div`
    display: inline-block;
`
export default class Homepage extends React.Component {

  render () {

    return (
      <div>
        <Home>
        <h1>LabeNinjas</h1>
        <p>O talento certo no momento certo</p>
        <Botoes>
        <button onClick={() => this.props.trocarPagina("form")}>Quero ser um ninja</button>
        <button onClick={() => this.props.trocarPagina("list")}>Contratar um ninja</button>
        </Botoes>
    </Home>
    </div>
    );
  }

}