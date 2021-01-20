import React, { Component } from 'react';
import Body from './components/body-sellers/Body';
import { Footer } from './components/footer/Footer';
import {Header} from './components/header/Header'

export class SellersPage extends Component {
  render() {
    return (
      <div>
        <Header 
          goHome={this.props.goHome}
          handleHomePage={this.props.handleHomePage}/>
        <Body/>
        <Footer />
      </div>
    )
  }
}
