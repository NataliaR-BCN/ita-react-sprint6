import styled from 'styled-components';

export const DivEscena = styled.div`
    border: 1px solid black;
    border-radius: 50px;
    text-align: center;
    width: 98%;
    padding: 0.8rem 0;
    margin: 1.1rem auto;
    background-color: ${({isActivated}) => isActivated ? 'rgba(255, 192, 203, 0.98)' : 'rgba(255, 255, 255, 0.7)'};
`;
