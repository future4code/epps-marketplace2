import React from 'react';
import styled from 'styled-components';

const BoxCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 18vw;
  position: absolute;
  left: 80vw;
  bottom: 121vh;
  box-sizing: border-box;
  padding: 5px;
  border-radius: 5px;
  background-color: #202124;
  color:#64536f;
`

class CartBox extends React.Component {
  render() {
    return (
      <BoxCart>
        <h1>Carrinho</h1>
        <p>Total: <strong>R$</strong></p>      
      </BoxCart>
    )
  }
};

export default CartBox