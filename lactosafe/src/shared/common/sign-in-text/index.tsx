import React from 'react';
import './sign-in-text.scss';


interface Props {

    text: string;
    bold?: boolean;
    fontSize: 's' | 'm' | 'l' | 'xl' | 'xxl';
}
const SignInText: React.FC<Props> = ({ text, bold, fontSize }) => {
    return (
        <div className={`row sign-in-text font-size-${fontSize} ${bold ? 'font-bold' : ''}`}>
            {text}
        </div>
    )
}

export default SignInText;
