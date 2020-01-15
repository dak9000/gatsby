import styled from 'styled-components';
import { getColor, getHoverColor } from '../utils';

export const Divider = styled.div`
    height: ${props => `${props.height}px`};
    background-color: ${props => props.color ? `${getColor(props.color)}` : '#000'};
    width: 100%;
    border-radius: 40px;
    max-width: ${props => props.width === 'full' ? `100%` : `1200px`};
    margin: 0 auto 20px;
`;

export const StyledButton = styled.a`
    background-color: ${props => props.color ? `${getColor(props.color)}` : '#000'};
    color: ${props => props.textColor ? `${getColor(props.textColor)}` : 'inherit'};
    font-size: 20px;
    display: flex;
    margin-bottom: 1.5rem;
    justify-content: center;
    align-content: center;
    padding: 20px 25px;
    box-shadow: inset 0 1px 0 #ffffff33;
    border-radius: 3px;
    transition: .25s ease-in-out;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    &:hover {
        cursor: pointer;
        background-color: ${props => props.color ? `${getHoverColor(props.color)}` : ''}
    }
`;