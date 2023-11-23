import Alert, { AlertProps } from '@mui/material/Alert';
import React from 'react'



interface Props extends AlertProps{
  showAlert:boolean;
}

const SignInAlert:React.FC<Props> = ({showAlert,...props}) => {
  return (
    <>
    {showAlert && <Alert {...props}></Alert>}
    </>
  )
}

export default SignInAlert;
