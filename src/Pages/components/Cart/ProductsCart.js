import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { CartItem } from './Cart-Item'

const CartWrapper = styled.div`
  display:flex;
  flex-direction: space-around;
  align-self: flex-end;
  padding: 5px;
  justify-self: right;
  overflow: hidden;
  width: 150%;
  border: 1px dotted blue;
  background-repeat: no-repeat;
  background-size: cover;
  color: ;
`
const CartProductsList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

const CartSectionTitle = styled.h2`
  margin: 5px 0;
`

export class ProductsCart extends Component {
  getProductList() {
    const productList = this.props.cartContent.map((content) => {
      const productLabel = `${content.quantity}x ${content.product.name}`

      return (
        <CartItem
          key={content.product.name}
          productLabel={productLabel}
          onDelete={() => this.props.removeProductFromCart(content.product)}
        />
      )
    })
    return productList
  }

  getTotalValue() {
    return this.props.cartContent.reduce((acc, currentContent) => {
      return acc + currentContent.product.value * currentContent.quantity
    }, 0)
  }

  render() {
    const productList = this.getProductList()
    const totalValue = this.getTotalValue()

    return (
      <CartWrapper isCartVisible={this.props.isCartVisible}>
        <CartSectionTitle>Carrinho:</CartSectionTitle>
        <CartProductsList>{productList}</CartProductsList>
        <p>Total: <b>$ {totalValue.toFixed(2)}</b></p>
      </CartWrapper>
    )
  }
}

export default ProductsCart;
