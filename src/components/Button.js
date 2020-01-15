import React from 'react';
import { StyledButton } from '../styles/primitives';

const Button = ({ text, link, ...other }) => {
    return (
        <StyledButton
            {...other}
            href={link}
            target="_blank"
            rel="noopener"
        >
            {text}
        </StyledButton>
    );
};

export default Button;
