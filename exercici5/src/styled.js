import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

	body {
		margin: 0;
        padding: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

`;


export const Nav = styled.nav`
    margin: 0.5rem 0.5rem;
    `;


export const ButtonNav = styled.button`
    border: 1px solid black;
    border-radius: 0;
    background-color: #f8f8f8;
    font-size: 1.1rem;
    text-align: center;
    width: 50%;
    padding: 0.8rem 0;
    margin: 0 auto;
`;
