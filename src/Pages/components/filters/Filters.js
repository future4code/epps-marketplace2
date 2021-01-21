import React from "react";
import styled from "styled-components";

const BoxFilter = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-grow: 1;
  width: auto;
  height: 10vh;
  justify-content: center;
  padding: 10px;
  border: 1px solid #4281a4;
  border-radius: 0px 0px 5px 5px;
  margin-top: 0px;
  margin-bottom: 5px;
  margin: auto;
  font-family: "Source Code Pro", monospace;
`;
const Fontes = styled.p`
  color: #64536f;
  margin: 2%;
  font-family: Arial, Helvetica, sans-serif;
`;
const Titulo = styled.p`
  display: flex;
  color: #64536f;
  margin-top: 0;
  margin-bottom: 1%;
  font-family: Arial, Helvetica, sans-serif;
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
`;

const Selector = styled.select`
  width: 25%;
  height: 60%;
  font-size: 16px;
  margin: auto;
  margin-top: 2%;
  margin-right: 3px;
  padding-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #4281a4;
  border-radius: 9px;
`;

export default class Filters extends React.Component {
  // const [state, setState] = useState({
  // name: '',
  // });

  // const handleChange = (event) => {
  // const name = event.target.value;
  // setState({state: name});

  // };

  // console.log(props)

  //   const handleMaxFilter = (event) => {
  //     const value = Number(event.target.value)

  //     const newFilterValue = {
  //       'maxValue': value,
  //     }

  //     props.onFilterChange(newFilterValue)
  //   }

  //   const handleMinFilter = (event) => {
  //     const value = Number(event.target.value)

  //     const newFilterValue = {
  //       'minValue': value,
  //     }

  //     props.onFilterChange(newFilterValue)
  //   }
  render() {
    return (
      <>
        <BoxFilter>
          <Titulo>Filtros</Titulo>
          <Fontes>Valor Mínimo:</Fontes>
          <Inputs
            type="number"
            min={0}
            name="valorMin"
            // onChange={handleMinFilter}
          />

          <Fontes>Valor Máximo:</Fontes>
          <Inputs
            type="number"
            min={0}
            name="valorMax"
            onChange={this.props.handleFilterMax}
          />
          <Fontes>Buscar Produto:</Fontes>
          <Inputs
            type="text"
            name="busca"
            // value={props.searchValue}
            // onChange={props.handleSearchChange}
          />
          <Fontes>Ordenar produtos:</Fontes>
          <Selector
            native
            // value={state.name}
            // onChange={handleChange}
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

// export default Filters;
