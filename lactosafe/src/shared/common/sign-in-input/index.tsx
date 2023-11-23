
import TextField, { TextFieldProps } from '@mui/material/TextField';
import * as  React from 'react';

const SignInInput: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField {...props}></TextField>
  )
}

export default SignInInput;
