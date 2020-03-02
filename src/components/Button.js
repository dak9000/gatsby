import React, { useEffect, useState } from 'react';
import { StyledButton } from '../styles/primitives';

const Button = ({ text, link, ...other }) => {
    const [ finalLink, setfinalLink ] = useState(link);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const query = window.location.search;
            setfinalLink(`${finalLink}${query}`);
        }
    }, []);

    return (
        <StyledButton
            {...other}
            href={finalLink}
            target="_blank"
            rel="noopener"
        >
            {text}
        </StyledButton>
    );
};

export default Button;
