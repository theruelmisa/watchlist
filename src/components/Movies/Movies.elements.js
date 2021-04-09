import styled from 'styled-components';

export const MoviesContainer = styled.div`
    border: 1px solid red;
    padding: 2rem;
`;

export const MovieList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.5rem;
`;

export const CategoryName = styled.h3`
    font-size: 2.5rem;
    letter-spacing: .15rem;
    margin-bottom: 2rem;
`;