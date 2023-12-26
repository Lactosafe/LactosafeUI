
import TextField, { TextFieldProps } from '@mui/material/TextField';
import * as  React from 'react';

const LactoSafeInput: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField {...props}></TextField>
  )
}

export default LactoSafeInput;
