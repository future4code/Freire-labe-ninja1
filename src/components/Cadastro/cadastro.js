import React from 'react';
import cadastro from '../src/components/Cadastro/cadastro';
/*
class CadastroServico extends React.Component {
    state = {
      InputTitulo: "",
      InputDescricao: "",
      InputPreco: ""
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

    AdicionarServico = () => {
      const body = {
        titulo: this.state.InputTitulo,
        descricao: this.state.InputDescricao,
        preco: this.state.InputPreco
      };
    
    request
      .then((resposta) => {
        console.log(resposta.data);
        alert('Cadastro de Serviço realizado com sucesso!');
        this.setState({ InputCadastro: "" });
      })
      .catch((erro) => {
        console.log(erro.response);
        alert('Não foi possível realizar o Cadastro de Serviço :(');
      });
    };

  CadServico = () => {
    return (
      <AdicionarServico>
        <label>Cadastre o seu serviço</label>
        <input
          placeholder='Título' 
          type='text'
          value={this.state.InputTitulo}
          onChange={this.onChangeInputTitulo}
            
        />
        <input
          placeholder='Descrição' 
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

        <label>Forma de Pagamento</label>
            <select id='formaDePagamento'>       
              <option select disabled value=''>Selecione:</option>
              <option>Cartão de Crédito</option>
              <option>Cartão de Débito</option>
              <option>Boleto Bancário</option>
              <option>Pix</option>
              <option>PayPal</option>
            </select>
        
        <button onClick={this.AdicionarServico}> CADASTRAR </button>
      </AdicionarServico>
    );
  };


  render() {
    return <section>{this.CadServico()}</section>;
  }
}
*/
export default CadastroServico
