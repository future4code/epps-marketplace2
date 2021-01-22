import React from "react";
import styled from "styled-components";

const BoxFilter = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-grow: 1;
  width: 90%;
  height: 10vh;
  justify-content: center;
  padding: 10px;
  border: 1px solid #4281a4;
  border-radius: 0px 0px 5px 5px;
  margin: auto;
  font-family: "Source Code Pro", monospace;
`;
const Fontes = styled.p`
  color: #64536f;
  margin: 2%;
  font-family: Arial, Helvetica, sans-serif;
`;
const Titulo = styled.button`
  width: 8%;
  height: 35%;
  font-size: 14px;
  margin-top: 33px;
  margin-left: 15px;
  margin-bottom: 10px;
  border: 1px solid #4281a4;
  border-radius: 9px;
  background-color: #4281a4;
  color: #EEE;
  outline: 0;
  cursor: pointer;
    :hover{ 
    background-color:#91e2d3;
    border: 1px solid #91e2d3;
    border-radius: 9px;
    color: #64536f;
  }
`;

const Inputs = styled.input`
  width: 20%;
  height: 50%;
  font-size: 16px;
  margin: auto;
  margin-top: 2%;
  padding-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #4281a4;
  border-radius: 9px;
  outline: 0;
`;

const Selector = styled.select`
  width: 25%;
  height: 60%;
  font-size: 15px;
  margin: auto;
  margin-top: 2%;
  margin-right: 3px;
  padding-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #4281a4;
  border-radius: 9px;
  outline:0;
`;

export default class Filters extends React.Component {

  render() {
    return (
      <>
        <BoxFilter>
      
          <Fontes>Valor Mínimo:</Fontes>
          <Inputs
            type="number"
            min={0}
            name="valorMin"
            onChange={this.props.handleFilterMin}
          />

          <Fontes>Valor Máximo:</Fontes>
          <Inputs
            type="number"
            min={0}
            name="valorMax"
            onChange={this.props.handleFilterMax}

          />

          <Titulo onClick={this.props.filtraProdutos}>Filtrar</Titulo>


          <Fontes>Buscar Produto:</Fontes>
          <Inputs
            type="search"
            name="busca"
          />
          {/* <button onClick={this.props.filtraProdutos}>Filtar</button> */}
          <Fontes>Ordenar produtos:</Fontes>
          <Selector
            native
            label="Ordenar"
          >
            <option aria-label="None" value="" />
            <option value="Imóveis">Imóveis</option>
            <option value="Autos e peças">Autos e peças</option>
            <option value="Para a sua casa">Para a sua casa</option>
            <option value="Eletrônicos e celulares">
              Eletrônicos e celulares
            </option>
            <option value="Vagas de emprego">Vagas de emprego</option>
            <option value="Músicas e hobbies">Músicas e hobbies</option>
            <option value="Esportes e lazer">Esportes e lazer</option>
            <option value="Moda e beleza">Moda e beleza</option>
            <option value="Agro e indústria">Agro e indústria</option>
          </Selector>
        
        </BoxFilter>
      </>
    );
  }
}

