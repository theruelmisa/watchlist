import styled from 'styled-components';
import { Row } from '../../globalStyles';

export const MovieListContainer = styled.div`
    border: 1px solid red;
`;


export const MovieListTitle = styled.h1`
    padding: 1rem;
    font-size: 2.2rem;
    letter-spacing: .2rem;
`;

export const MoviesContainer = styled(Row)`
    align-items: stretch;
    width: 69vw;
    padding: 1rem;
    overflow-x: scroll;
    overflow-y: hidden;

    /* &::-webkit-scrollbar {
        display: none;
    } */

    border: 1px solid red;
`;

export const MovieCard = styled.div`
    cursor: pointer;
    border: 1px solid transparent;
    margin-bottom: 1rem;
    margin-right: 2rem;

`;

export const MoviePoster = styled.img`
    object-fit: contain;
    height: 30rem;
`;

