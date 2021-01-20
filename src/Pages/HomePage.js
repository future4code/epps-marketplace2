
import React from 'react';
import { Header } from './components/header/Header'
import Subheader from './components/subheader/Subheader';
import Filters from './components/filters/Filters';
import RangeSlider from './components/filters/Range';
import productsCard from './components/ProductsCard/productsCard'
import { Footer } from './components/footer/Footer';


export class HomePage extends React.Component {
  render() {
    return (

      <div className="App">
        <Header />
        <Subheader />
         <div className="Container-filters">
          <Filters/>
          <RangeSlider/>
          </div>
          <productsCard />
        <Footer />
      </div>
    )
  }
}
