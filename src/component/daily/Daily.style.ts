import styled from 'styled-components';

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
`;
export const GridItem = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 5px;
    text-align: center;

    P {
        font-size: 1rem;
    }
    span {
        color: #666;
    }

`;