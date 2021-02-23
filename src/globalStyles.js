import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --midnight: #052439;
        --white: #fafafa;
    }

    *, 
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%; // 10px for easier rem sizing
    }
    body {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        line-height: 1.4;
        background: orange;
        color: #3c3c3c;
    }
    a { 
        color: inherit;
        text-decoration: none;
    }
    li {
        list-style: none;
    }
`;

// Containers

export const MainGrid = styled.div`
    display: grid;
    grid-template-columns: 20rem 1fr;

`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


// Typography

export const Mainheading = styled.h1`
    font-size: 2.5rem;
`;

export const Subheading = styled.h3`
    font-size: 2rem;
`;

export const body1 = styled.p`
    font-size: 1.4rem;
`;

// Button Styles

export const Button = styled.button`
    cursor: pointer;
    padding: 1.2rem 2.2rem;
    border: none;
    border-radius: .5rem;
    font-size: 1.2rem;
    letter-spacing: .15rem;

    
    &:active, &:focus {
        outline: none;
    }
`;


export default GlobalStyles;