import React from 'react'
import { Header } from './components/header/Header'
import Subheader from './components/subheader/Subheader';
import { Footer } from './components/footer/Footer';

export class HomePage extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Subheader />
        <Footer />
      </div>
    )
  }
}
