
import React from 'react';
import { Header } from './components/header/Header'
import Subheader from './components/subheader/Subheader';
import Filters from './components/filters/Filters';
import RangeSlider from './components/filters/Range';
import { Footer } from './components/footer/Footer'; 
import ProductsCard from './components/ProductsCard/ProductsCard';
import axios from 'axios'


export class HomePage extends React.Component {
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
    this.informacoesCard()
  }

  componentDidUpdate = () =>{
    
  }



  render() {
    // console.log(this.state.produtos)
    return (
      <div className="App">
        <Header
          goHome={this.props.goHome}
          handleHomePage={this.props.handleHomePage}
        />
        <Subheader />
        <div className="Container-filters">
          <Filters />
          <RangeSlider />
        </div>
        <ProductsCard  produtos={this.state.produtos}/>
        <Footer />
      </div>
        
    );
  }
}
