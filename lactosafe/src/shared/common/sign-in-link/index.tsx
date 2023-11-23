import { Link, LinkProps } from '@mui/material';
import React from 'react'

const SignInLink:React.FC<LinkProps> = ({...props}) => {
  return (
    <Link {...props}></Link>
  )
}

export default SignInLink;
