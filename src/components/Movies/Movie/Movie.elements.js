import styled from 'styled-components';
import { Row, Mainheading, Subheading, body1 } from '../../../globalStyles';

export const MovieContainer = styled.div`
    border: 1px solid red;
    width: 25rem;
`;

export const MoviePoster = styled.img`
    object-fit: contain;
    max-width: 100%;
`;

export const MovieInfo = styled(Row)`
    border: 1px solid red;
    justify-content: flex-start;
`;