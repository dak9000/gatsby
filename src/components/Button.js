import React from 'react';
import { StyledButton } from '../styles/primitives';

const Button = ({ text, url, ...other }) => {
    return (
        <StyledButton {...other} href={url}  >
            {text}
        </StyledButton>
    );
};

export default Button;
