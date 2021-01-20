import React from "react";
import axios from 'axios';
import styled from 'styled-components';


const Box = styled.div` 
  border: 1px solid black;
  padding: 20px;
`

const Input = styled.input` 
  padding: 10px;
  margin: 10px;
  display: block;

`
const Select = styled.select`
  padding: 10px;
  margin: 10px;
  display: block;
`

class Body extends React.Component {
  state = {
    inputNome: '',
    inputDesc: '',
    inputValor: '',
    inputCategoria: '',
    inputUrl: '',
    inputPagamento: '',
    inputParcela: ''
  }


  onChangeNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  onChangeDesc = (event) => {
    this.setState({ inputDesc: event.target.value });
  };

  onChangeValor = (event) => {
    this.setState({ inputValor: event.target.value });
  };

  onChangeCategoria = (event) => {
    this.setState({ inputCategoria: event.target.value });
  };

  onChangeUrl = (event) => {
    this.setState({ inputUrl: event.target.value });
  };

  criarProduto = () => {
    const body = {
      name: this.state.inputNome,
      description: this.state.inputDesc,
      price: this.state.inputValor,
      category: this.state.inputCategoria,
      photos: this.state.inputUrl,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/fourUsedTwo/products", body,
        {
          headers: {
            Authorization: "pablo-silas-epps"
          }
        }
      )
      .then((resposta) => {
        alert('Produto criado com sucesso!')
      })
      .catch((err) => {
        alert('Erro ao criar novo produto!')
        console.log(err.message);
      });
  };

  render() {
    return (
      <Box>
        
        <h1>Cadastrar novo produto: </h1>
        <Input placeholder='Nome do Produto:' value={this.inputNome} onChange={this.onChangeNome}></Input>
        <Input placeholder='Descrição do Produto:' value={this.inputDesc} onChange={this.onChangeDesc}></Input>
        <Input placeholder='Valor' type='number' value={this.inputValor} onChange={this.onChangeValor}></Input>
        <Select>
          <option>Pagamento</option>
          <option>Cartão</option>
          <option>Boleto</option>
        </Select>
        <Input placeholder='Categoria' value={this.inputCategoria} onChange={this.onChangeCategoria}></Input>
        <Input placeholder='URl da Foto' value={this.inputUrl} onChange={this.onChangeUrl}></Input>
        <Select>
          <option>Parcelas</option>
          <option>1</option>
          <option>3</option>
          <option>6</option>
          <option>9</option>
          <option>12</option>
        </Select>
        <button onClick={this.criarProduto()}>Adicionar Produto</button>
        
      </Box>
    );
  }
}

export default Body;
