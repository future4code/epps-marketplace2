import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default class CenteredTabs extends React.Component {
  
  render(){

    return (
     <>
      <Paper >
        <Tabs
          indicatorColor="primary"
          textColor="#64536f"
          centered
        >
            
          <Tab onClick={() =>{this.props.pegaCategoria('home')}} value={'home'} label="Home"/>
          <Tab onClick={() =>{this.props.pegaCategoria('acessorios')}} value={'acessorios'} label="Acessórios"/>
          <Tab onClick={() =>{this.props.pegaCategoria('roupas')}} label="Roupas" />
          <Tab  onClick={() =>{this.props.pegaCategoria('calcados')}}label="Calçados" />
          <Tab  onClick={() =>{this.props.pegaCategoria('casa')}}label="Casa"/>
          <Tab  onClick={() =>{this.props.pegaCategoria('diversos')}}label="Diversos" />
        </Tabs>
        
      </Paper>
    </>
    );
  }
}
