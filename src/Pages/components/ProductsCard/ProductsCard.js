import React from "react"
import axios from 'axios'
import styled from 'styled-components';

const Principal = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Card = styled.div ` 
  border: 1px solid #4281a4;
  padding: 10px;
  margin: 5px;
  border-radius: 3px;
`
const H3 = styled.h3 `
  font-family: Arial;
  color: #3f51b5;
  :hover{
      color: #75b0d5;
      cursor: pointer;
    }

`


class ProductsCard extends React.Component {
  state = {
    produtos: []
  }

  informacoesCard = () => {

    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/fourUsedTwo/products')
      .then((res) => {
        this.setState({ produtos: res.data.products })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount = () => {
    {this.informacoesCard()}
  }

  render() {
    return (
      <Principal>
        {this.state.produtos.map((i) => {
          return (
            <Card>
              <H3>{i.name}</H3>
              <img height='250px' width='300px' src={i.photos}></img>
              <p>{i.category}</p>
              <p><strong>Descrição: </strong>{i.description}</p>
              <p><strong>Valor: </strong> {i.price}</p>
              <p><strong>Pagamento: </strong> {i.paymentMethod}</p>
              <p><strong>Parcelas: </strong> {i.installments}</p>
              <br />
            </Card>
          );
        })}
      </Principal>
    )}
}

export default ProductsCard;
