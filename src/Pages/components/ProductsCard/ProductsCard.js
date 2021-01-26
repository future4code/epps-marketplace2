import React from "react"
import styled from 'styled-components';

const Principal = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`
const Card = styled.div ` 
  border: 1px solid #4281a4;
  padding: 10px;
  margin: 5px;
  border-radius: 3px;
  width: 400px;
`
const H3 = styled.h3 `
  font-family: Arial;
  color: #3f51b5;
  :hover{
      color: #75b0d5;
      cursor: pointer;
    }
`
const Botao = styled.button `
  padding: 7px;
  margin-top: 10px;
  border: 1px solid #4281a4;
  width: 100%;
  border-radius: 5px;
  outline: 0;
  color: #3f51b5;
  background-color: transparent;
  :hover{
      color: #ddd;
      background-color: #3f51b5;
      cursor: pointer;
    }
`

class ProductsCard extends React.Component {
  render() {
    
    return (
      <Principal>
        {this.props.produtos.map((i) => {
          return (
            <Card 
              key={i.id}
              product={i.produto}
              onAddToCart
            >
              <H3>{i.name}</H3>
              <img height='250px' width='300px' src={i.photos} alt={i.nome}></img>
              <p>{i.category}</p>
              <p><strong>Descrição: </strong>{i.description}</p>
              <p><strong>Valor: </strong> {i.price}</p>
              <p><strong>Pagamento: </strong> {i.paymentMethod}</p>
              <p><strong>Parcelas: </strong> {i.installments}</p>
              <br />
              <Botao>Adicionar ao Carrinho</Botao>
            </Card>
          );
        })}
      </Principal>
    )}
}

export default ProductsCard;
