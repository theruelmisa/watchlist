import styled from 'styled-components';
import { Section, Row } from '../../globalStyles';

export const MoviesSection = styled(Section)`
    border: 1px solid red;
`;

export const MoviesContainerTitle = styled.h1`
    padding: 1rem;
    font-size: 2.2rem;
    letter-spacing: .2rem;  
`;

export const MoviesContainer = styled(Row)`
    width: 69vw;
    padding: 1rem;
    overflow-x: scroll;

    justify-content: ${props => props.savedMoviesList ? 'start' : 'space-between'}
`;

export const MovieCard = styled.div`
    cursor: pointer;
    margin-bottom: 1rem;
    margin-right: 2rem;
`;

export const MoviePoster = styled.img`
    object-fit: contain;
    height: 30rem;
`;
