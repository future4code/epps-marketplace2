import React from "react";
import axios from "axios";
import styled from "styled-components";
import { StyledButton } from "./Body-styled";

const Box = styled.div`
  border: 1px solid black;
  padding: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  display: block;
`;
const Select = styled.select`
  padding: 10px;
  margin: 10px;
  display: block;
`

const H1 = styled.h1`
   font-family: Arial;
    color: #3f51b5;
`

class Body extends React.Component {
  state = {
    inputNome: "",
    inputDesc: "",
    inputValor: "",
    inputCategoria: "",
    inputUrl: [],
    inputPagamento: "",
    inputParcela: "",
  };

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
    console.log(event.target.value)
    this.setState({ inputUrl: event.target.value });
  };
  onChangeInstallments = (event) => {

    this.setState({
      inputParcela: event.target.value,
    });
  };

  onChangePaymentMethod = (event) => {

    this.setState({
      inputPagamento: event.target.value,
    });
  };

  criarProduto = () => {
    const body = {
      name: this.state.inputNome,
      description: this.state.inputDesc,
      price: this.state.inputValor,
      paymentMethod: this.state.inputPagamento,
      category: this.state.inputCategoria,
      photos: [this.state.inputUrl],
      installments: this.state.inputParcela,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/fourUsedTwo/products",
        body
      )
      .then((resposta) => {
        alert("Produto criado com sucesso!");
        
      })
      .catch((err) => {
        alert("Erro ao criar novo produto!");
        console.log(err.message);
      });
  };

  render() {
    return (
      <Box>

        <H1>Cadastrar novo produto: </H1>
        <Input
          placeholder="Nome do Produto:"
          value={this.state.inputNome}
          onChange={this.onChangeNome}
        ></Input>
        <Input
          placeholder="Descrição do Produto:"
          value={this.inputDesc}
          onChange={this.onChangeDesc}
        ></Input>
        <Input
          placeholder="Valor"
          type="number"
          value={this.inputValor}
          onChange={this.onChangeValor}
        ></Input>
        <Select onChange={this.onChangePaymentMethod}>
          <option>Pagamento</option>
          <option value={"card"}>Cartão</option>
          <option value={"money"}>Dinheiro</option>
        </Select>
        <Input
          placeholder="Categoria"
          value={this.inputCategoria}
          onChange={this.onChangeCategoria}
        ></Input>
        <Input
          placeholder="URL da Foto"
          value={this.inputUrl}
          onChange={this.onChangeUrl}
        ></Input>
        <Select onChange={this.onChangeInstallments}>
          <option>Parcelas</option>
          <option value={1}>1</option>
          <option value={3}>3</option>
          <option value={6}>6</option>
          <option value={9}>9</option>
          <option value={12}>12</option>
        </Select>
      <br/>
        <StyledButton onClick={this.criarProduto}>Adicionar Produto</StyledButton>

      </Box>
    );
  }
}

export default Body;
