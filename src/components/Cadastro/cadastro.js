import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const DivCadastro = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  column-gap: 20px;
  row-gap: 30px;
  font-size: 1em;
  font-size: larger;
  font-family: sans-serif;
  height: 100%;

h2{
  font-family: sans-serif;
  font-weight: bold;
  color:#190f2b;
  
}

input{
  margin-bottom: 0.2em;
  border-radius: 6px;
  padding: 7px;
  width: 300px;
  font-family: sans-serif;
  
}

label{
  font-family: sans-serif;
}

select{
  margin-bottom: 0.2em;
  border-radius: 3px;
  padding: 6px;
  width: 180px;
  font-family: sans-serif;
}

button{
  margin-bottom: 0.2em;
  border-radius: 6px;
  padding: 7px;
  margin-bottom: 25px;
  width: 150px;
  height: 40px;
  font-family: sans-serif;
  box-shadow: 2px 2px 2px 2px rgba(0 0 0 0.2);
}
`

class CadastroServico extends React.Component {
    state = {
      InputTitulo: "",
      InputDescricao: "",
      InputPreco: "",
      InputData: "",
      modoDePagamento: []
    };

    onChangeInputTitulo = (event) => {
      this.setState({InputTitulo: event.target.value });
    };
    onChangeInputDescricao = (event) => {
      this.setState({InputDescricao: event.target.value });
    };
    onChangeInputPreco= (event) => {
      this.setState({ InputPreco: event.target.value });
    };

    onChangeInputData=(event) => {
      this.setState({InputData: event.target.value})
    }

    onChangeModoDePagamento=(event)=>{
          const listaDePagamentos = [...this.state.modoDePagamento, event.target.value]
          console.table(listaDePagamentos)
          this.setState({ modoDePagamento: listaDePagamentos })
    }


    adicionarServico = () => {
      const url = 'https://labeninjas.herokuapp.com/jobs'
      const body = {
        title: this.state.InputTitulo,
        description: this.state.InputDescricao,
        price: Number(this.state.InputPreco),
        paymentMethods: this.state.modoDePagamento,
        dueDate: "2022-12-30",
      };

    axios.post(url, body, {
      headers: {
        Authorization: "5d6c4350-ae7d-40a8-a7b3-7703b5ef98d2"}
    }) .then((resposta) => {
        alert('Cadastro de Serviço realizado com sucesso!');
        this.setState({ 
          InputTitulo: "", 
          InputDescricao:"", 
          InputPreco:"", 
          InputPrazo:"",
          modoDePagamento:[]
         });
      }).catch((erro) => {
        console.log(erro.response);
        alert('Não foi possível realizar o Cadastro de Serviço :(');
      });
    };

render() {
  return (
    <DivCadastro>
      <h1>Cadastre seu serviço</h1>
      <input type="text" value={this.state.InputTitulo} onChange={this.onChangeInputTitulo} placeholder="Serviço"></input>
      <input type="text" value={this.state.InputDescricao} onChange={this.onChangeInputDescricao} placeholder="Descrição"></input>
      <input type="number" value={this.state.InputPreco} onChange={this.onChangeInputPreco} placeholder="Preço"></input>
     
      <select multiple value={this.state.modoDePagamento} onChange={this.onChangeModoDePagamento}>
        <option>Criptomoeda</option>
        <option>Cartão de Débito</option>
        <option>Cartão de Crédito</option>
        <option>PayPal</option>
        <option>Boleto</option>
        <option>Pix</option>
      </select>

      <input type="date" value={this.state.prazo} onChange={this.atualizaPrazo}></input>

      {/* <input type="date" value={this.state.prazo} onChange={this.atualizaPrazo}></input> */}

      <button onClick={this.adicionarServico}>Cadastrar Serviço</button>
    </DivCadastro>
  )
}
}

export default CadastroServico;

