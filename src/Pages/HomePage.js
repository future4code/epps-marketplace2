import React, { Component } from 'react';
import Subheader from './components/subheader/Subheader';
import Filters from './components/filters/Filters';
import RangeSlider from './components/filters/Range';
import App from '../App.css';

export class HomePage extends Component {
  render() {
    return (
      <div>
        <p>Pronto para começar!</p>

        <Subheader/>
        <div className="Container-filters">
          <Filters/>
          <RangeSlider/>
        </div>
      </div>
    )
  }
}
