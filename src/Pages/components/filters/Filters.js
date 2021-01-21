import React from 'react';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '80%',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  
}));

export default function Filters() {
  const classes = useStyles();
  const [state, setState] = useState({
    name: '',
  });

  const handleChange = (event) => {
    const name = event.target.value;
    setState({state: name});
    
  };
  
  return (
    <>
        
     <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>Filtrar por</InputLabel>
        <Select
          native
          value={state.name}
          onChange={handleChange}
          label="Ordenar"
        >    
          <option aria-label="None" value="" />
          <option value='Imóveis'>Imóveis</option>
          <option value='Autos e peças'>Autos e peças</option>
          <option value='Para a sua casa'>Para a sua casa</option>
          <option value='Eletrônicos e celulares'>Eletrônicos e celulares</option>
          <option value='Vagas de emprego'>Vagas de emprego</option>
          <option value='Músicas e hobbies'>Músicas e hobbies</option>
          <option value='Esportes e lazer'>Esportes e lazer</option>
          <option value='Moda e beleza'>Moda e beleza</option>
          <option value='Agro e indústria'>Agro e indústria</option>
        </Select>
     </FormControl>    
      
    </>
  );
}
