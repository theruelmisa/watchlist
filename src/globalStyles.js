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

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2rem;
    padding: 1rem 2rem;
`;

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

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