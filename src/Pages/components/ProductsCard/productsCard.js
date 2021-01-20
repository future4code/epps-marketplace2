import React from "react"
import axios from 'axios'
import Box from '@material-ui/core/Box'


class productsCard extends React.Component {
    state = {
        produtos: []
    }

    informacoesCard = () => {

        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/fourUsedTwo/products',{}, {})
        .then((res) => {
            console.log(res)
            alert(res)
            this.setState({produtos: res})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    componentDidMount = () =>{
        this.informacoesCard()
        console.log(this.state.produtos)
    }



    render() {
        
      return (

        <Box>
          <grid>
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
        </grid>
                  
        </Box>
      );
    }
  }
  
  export default productsCard;
  