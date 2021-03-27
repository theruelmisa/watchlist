import styled from 'styled-components';

export const MoviesContainer = styled.div`
    border: 1px solid red;
`;

export const MovieList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    border: 1px solid red;
`;