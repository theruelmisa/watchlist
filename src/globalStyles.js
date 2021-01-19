import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {

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
    }
    a { 
        color: inherit;
        text-decoration: none;
    }
    li {
        list-style: none;
    }
`;

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 90vh;

    border: 1px solid red;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default GlobalStyles;