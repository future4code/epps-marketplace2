
import React, { Component } from 'react';
import Subheader from './components/subheader/Subheader';
import Filters from './components/filters/Filters';
import RangeSlider from './components/filters/Range';
import App from '../App.css';

import { Header } from './components/header/Header'

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
        <Footer />
      </div>
    )
  }
}
