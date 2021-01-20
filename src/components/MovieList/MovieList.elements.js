import styled from 'styled-components';
import { Row } from '../../globalStyles';

export const MoviesContainer = styled(Row)`
    align-items: stretch;
    width: 69vw;
    padding: 1rem;
    overflow-x: scroll;
`;


export const MovieCard = styled.div`
    cursor: pointer;
    border: 1px solid transparent;
    margin-bottom: 1rem;
    margin-right: 2rem;

    transition: all .25s ease-in-out;
    

    &:hover {
        transform: scale(1.05);
    }
`;

export const MoviePoster = styled.img`
    object-fit: contain;
    height: 30rem;
`;

