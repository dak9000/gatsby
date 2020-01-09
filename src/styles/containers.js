import styled from 'styled-components';

export const SiteWrapper = styled.main`
    /* max-width: 1200px; */
    margin: 0 auto;
`;

export const Centered = styled.section`
    max-width: 900px;
    text-align: center;
    display: flex;
    justify-content: center;
    margin: 0 auto;
`;

export const CenteredFullWidth = styled.section`
    max-width: 100%;
    margin: 0 30px;
    text-align: center;
    display: flex;
    justify-content: center;
`;

export const Container = styled.section`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
`;

export const Column = styled.div`
    margin: 15px;
    min-width: 0;
    max-width: 100%;
    width: 100%;
    @media screen and (min-width: 768px) {
        width: ${props => props.length > 1 ? `calc(50% - 30px)` : `100%`};
    }
    @media screen and (min-width: 1200px) {
        width: ${props => `calc(100% / ${props.length} - 30px)`};
    }
`;

export const AlignedContainer = styled.div`
    text-align: ${props => props.align ? props.align : 'inherit'}
`;
