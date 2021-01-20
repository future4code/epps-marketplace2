import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: "space-between",
    width:"50vw",
    flex: 1,
    },
}));

export default function LayoutTextFields() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <TextField
          id="outlined-full-width"
          label="Buscador"
          style={{ margin: 8 }}
          placeholder="O que você procura?"
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
    </div>
  );
}
