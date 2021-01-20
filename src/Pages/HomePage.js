<<<<<<< HEAD

import React from 'react';
import { Header } from './components/header/Header'
import Subheader from './components/subheader/Subheader';
import Filters from './components/filters/Filters';
import RangeSlider from './components/filters/Range';
<<<<<<< HEAD
import App from './App.css';

import { Header } from './components/header/Header'

=======
import productsCard from './components/ProductsCard/productsCard'
>>>>>>> 73b559f5f3c66eaf63079b3fe5c9027b489b33d9
import { Footer } from './components/footer/Footer';

=======
import React from "react";
import { Header } from "./components/header/Header";
import Subheader from "./components/subheader/Subheader";
import Filters from "./components/filters/Filters";
import RangeSlider from "./components/filters/Range";
import productsCard from "./components/ProductsCard/productsCard";
import { Footer } from "./components/footer/Footer";
>>>>>>> 169ef73f84aa9bb536a40357579ebb4f92fef491

export class HomePage extends React.Component {
  render() {
    return (
      <div className="App">
        <Header
          goHome={this.props.goHome}
          handleHomePage={this.props.handleHomePage}
        />
        <Subheader />
<<<<<<< HEAD
         <div className="Container-filters">
          <Filters/>
          <RangeSlider/>
          </div>
<<<<<<< HEAD
          <Footer />  
=======
          <productsCard />
=======
        <div className="Container-filters">
          <Filters />
          <RangeSlider />
        </div>
        <productsCard />
>>>>>>> 169ef73f84aa9bb536a40357579ebb4f92fef491
        <Footer />
>>>>>>> 73b559f5f3c66eaf63079b3fe5c9027b489b33d9
      </div>
    );
  }
}
