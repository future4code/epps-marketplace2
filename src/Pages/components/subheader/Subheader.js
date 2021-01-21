import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


// const useStyles = makeStyles(() => ({
//   root: {
//     display: 'flex',
//     flexDirection:'row',
//     justifyContent: "center",  
//   },
// }));

export default class CenteredTabs extends React.Component {
  render(){

    // const classes = useStyles();
    // const [value, setValue] = React.useState(0);
  
    // const handleChange = (event, newValue) => {
    //   setValue(newValue);
    // };
  
    return (
     <>
      <Paper >
        <Tabs
          indicatorColor="primary"
          textColor="#64536f"
          centered 
          // onClick={this.props.pegaCategoria}
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
