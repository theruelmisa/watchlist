import styled from 'styled-components';

export const MoviesContainer = styled.div`
    padding: 1rem;
`;

export const MovieList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.5rem;
    padding-right: 2rem;
    height: 78vh;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: .5rem;
        background-color: #ccc;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 5rem;
        background-color: orange;
    }
`;

export const CategoryName = styled.h3`
    font-size: 2.5rem;
    letter-spacing: .15rem;
    margin-bottom: 2rem;
`;