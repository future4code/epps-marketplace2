import React from 'react';
import styled from 'styled-components';

const CartListItem = styled.li`
  margin: 10px 0;
  border-bottom: 1px solid black;
  padding: 5px 0;
`

const RemoveButton = styled.span`
    font-weight: bold;
    padding: 0 20px;
    cursor: pointer;
    transition: 0.2s;
    
    :hover {
      color: red;
    }
`

export function CartItem(props) {
  return (
    <CartListItem>
      {props.productLabel}
      <RemoveButton onClick={props.onDelete}>X</RemoveButton>
    </CartListItem>
  )
}
