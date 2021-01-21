
import React from 'react';
import { Header } from './components/header/Header'
import Subheader from './components/subheader/Subheader';
import Filters from './components/filters/Filters';
import RangeSlider from './components/filters/Range';
import { Footer } from './components/footer/Footer'; 

import ProductsCard from './components/ProductsCard/productsCard';
import CheckboxLabels from "./components/filters/FilterCheckBox";
=======
import ProductsCard from './components/ProductsCard/ProductsCard';
import axios from 'axios'
import styled from 'styled-components'


const DivContainerFilter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 99%;
  margin: 0px;
`




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
      <div >
        <Header
          goHome={this.props.goHome}
          handleHomePage={this.props.handleHomePage}
        />
        <Subheader />
        <DivContainerFilter>
          <Filters />
          <RangeSlider />
        </DivContainerFilter>
        <ProductsCard  produtos={this.state.produtos}/>
        <Footer />
      </div>
        
    );
  }
}
