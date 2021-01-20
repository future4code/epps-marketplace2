import React from 'react'
import { Header } from './components/header/Header'
import Subheader from './components/subheader/Subheader';
import App from '../App.css'

export class HomePage extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Subheader />
      </div>
    )
  }
}
