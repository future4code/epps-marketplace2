import React from "react";
import axios from 'axios'


class productsCard extends React.Component {
    state = {
        produtos: []
    }

    informacoesCard = () =>{

        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/fourUsedTwo/products')
        .then((res) => {
            console.log(res)
            this.setState({produtos: res})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    componentDidMount = () =>{
        this.informacoesCard()
    }



    render() {
        
      return (
        <div>
          {this.state.produtos.map((informacao)=> {
              return(
                <div>
                <div>{informacao.name}</div>
                <div>{informacao.photos[0]}</div>
                <div>{informacao.description}</div>
                <p>{informacao.installments}</p><p>{informacao.paymentMethod}</p><p>{informacao.price}</p>
                <hr/>
                </div>
              )
              

          })
        }
                  
        </div>
      );
    }
  }
  
  export default productsCard;
  