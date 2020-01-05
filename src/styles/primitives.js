import styled from 'styled-components';
import { getColor } from '../utils';

export const Divider = styled.div`
    height: ${props => `${props.height}px`};
    background-color: ${props => props.color ? `${getColor(props.color)}` : '#000'};
    width: 100%;
    max-width: ${props => props.width === 'full' ? `100%` : `1200px`};
    margin: 0 auto;
`;
