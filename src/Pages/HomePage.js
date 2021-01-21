
import React from 'react';
import { Header } from './components/header/Header'
import Subheader from './components/subheader/Subheader';
import Filters from './components/filters/Filters';
import { Footer } from './components/footer/Footer'; 

import ProductsCard from './components/ProductsCard/ProductsCard';
// import CheckboxLabels from "./components/filters/FilterCheckBox";
import axios from 'axios'



export class HomePage extends React.Component {
  state = {
    produtos: [],
    produtosFiltrado: [],
    valorMax: Infinity
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
    this.informacoesCard()
  }

  componentDidUpdate = () =>{
    
  }
  // Pegar os produtos filtrados
 
  handleFilterMax = (e) =>{
   
    this.setState({
      valorMax: e.target.value
    })
  }

  pegaCategoria = (e) =>{
    const categoria = e 
    const filterCategoria = this.state.produtos.filter((produto) =>{
        return(produto.category === categoria)
      
      
    })
    this.setState({
      produtosFiltrado: filterCategoria
    })
  }


  render() {
    

    return (
      <div className="App">
        <Header
          goHome={this.props.goHome}
          handleHomePage={this.props.handleHomePage}
        />
        <Filters handleFilterMax={this.handleFilterMax} />
        <Subheader pegaCategoria={this.pegaCategoria} />
        <ProductsCard produtos={this.state.produtosFiltrado}/>
        <Footer />
      </div>
        
    );
  }
}
