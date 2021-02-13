import styled from 'styled-components';
import { Row, Subheading, body1 } from '../../../globalStyles';


export const MovieContainer = styled.div`
    border: 1px solid red;
    width: 30rem;
    margin-bottom: 2.5rem;
    margin-right: 2rem;
`;

export const MoviePoster = styled.img`
    object-fit: contain;
    max-width: 100%;
`;

export const MovieInfo = styled(Row)`
    margin-bottom: 0.5rem;
    justify-content: start;
    padding: 1rem;
`;

export const MovieTitle = styled(Subheading)`
    font-size: 1.5rem;
    margin-right: 1rem;
`;

export const MovieRating = styled(body1)`
    margin-right: 1rem;
`;

export const SaveButton = styled.span`
    color: ${ props => props.saved && 'red' };
    font-size: 1.8rem;
    margin-right: 1rem;
`;
