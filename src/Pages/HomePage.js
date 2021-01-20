import React from 'react';
import { Header } from './components/header/Header'
import Subheader from './components/subheader/Subheader';
import Filters from './components/filters/Filters';
import RangeSlider from './components/filters/Range';
import { Footer } from './components/footer/Footer'; 
import ProductsCard from './components/ProductsCard/ProductsCard';

export class HomePage extends React.Component {
  render() {
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
        <ProductsCard />
        <Footer />
      </div>
        
    );
  }
}
