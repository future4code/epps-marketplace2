import React from "react";
import TextField from '@material-ui/core/TextField';

class Input extends React.Component {
  render() {
    return (
        <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
        variant="outlined"
      />
    );
  }
}

export default Input;
