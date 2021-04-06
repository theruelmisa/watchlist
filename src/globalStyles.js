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
        background: #fafafa;
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

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 20rem 1fr 25rem;
    grid-gap: 2rem;
    
`;




export default GlobalStyles;