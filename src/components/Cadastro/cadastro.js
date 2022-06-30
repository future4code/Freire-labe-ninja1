import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const DivCadastro = styled.div`
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
  height: 250%;
  
  background-color: #5f3a6e;
  padding: 16px;

h2{
  font-family: sans-serif;
  font-weight: bold;
  color:#190f2b;
  
}

input{
  margin-bottom: 0.2em;
  background-color: #d4c4f2;
  border-radius: 6px;
  padding: 7px;
  width: 300px;
  font-family: sans-serif;
  font-weight: bold;
  
}

label{
  font-family: sans-serif;
  font-weight: bold;
  color:#190f2b;

}

select{
  margin-bottom: 0.2em;
  background-color: #d4c4f2;
  border-radius: 6px;
  padding: 6px;
  width: 180px;
  font-family: sans-serif;
  font-weight: bold;
}

button{
  margin-bottom: 0.2em;
  background-color: #d4c4f2;
  border-radius: 6px;
  padding: 7px;
  width: 150px;
  font-family: sans-serif;
  font-weight: bolder;
  box-shadow: 2px 2px 2px 2px rgba(0 0 0 0.2);

}

`


class CadastroServico extends React.Component {
    state = {
      InputTitulo: "",
      InputDescricao: "",
      InputPreco: "",
      InputData: ""
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

    AdicionarServico = () => {
      const body = {
        titulo: this.state.InputTitulo,
        descricao: this.state.InputDescricao,
        preco: Number(this.state.InputPreco),
        data: this.state.Inputdata
      };

    axios.post('https://labeninjas.herokuapp.com/jobs', body, {
      headers: {
        Authorization: "da6c0cd6-f91f-4d45-b501-9777926af4d2"
      }
    })
      .then((resposta) => {
        //console.log(resposta.data);
        this.setState({ InputTitulo: "", InputDescricao:"", InputPreco:"", InputPrazo:"" });
        alert('Cadastro de Serviço realizado com sucesso!');
        this.setState({ InputTitulo: "", InputDescricao:"", InputPreco:"", InputPrazo:"" });
      })
      .catch((erro) => {
        console.log(erro.response);
        alert('Não foi possível realizar o Cadastro de Serviço :(');
      });
    };

  CadServico = () => {
    return (
      
      <DivCadastro>
        <h2>Cadastre o seu Serviço</h2>
        <input
          placeholder='Nome do Serviço' 
          type='text'
          value={this.state.InputTitulo}
          onChange={this.onChangeInputTitulo}
            
        />
        <input
          placeholder='Descrição do Servico' 
          type='text'
          value={this.state.InputDescricao}
          onChange={this.onChangeInputDescricao}
        />
        <input
          placeholder='Preço (R$)' 
          type='number'
          value={this.state.InputPreco}
          onChange={this.onChangeInputPreco}
        />

          <label>Formas de Pagamento</label>
            <select id='formaDePagamento'>       
              <option select disabled value=''>Selecione:</option>
              <option>Cartão de Crédito</option>
              <option>Cartão de Débito</option>
              <option>Boleto Bancário</option>
              <option>Pix</option>
              <option>PayPal</option>
            </select>
            <br />

          <label>Prazo:</label>
          <input placeholder='Prazo' type='date'value={this.state.InputData}
           // onChange={this.onChangeInputData}
          />
        
        <button onClick={this.AdicionarServico}>CADASTRAR</button>
      </DivCadastro>
      
    );
  };


  render() {
    return <section>{this.CadServico()}</section>;
  }
}

export default CadastroServico


/// "key": "da6c0cd6-f91f-4d45-b501-9777926af4d2" ///