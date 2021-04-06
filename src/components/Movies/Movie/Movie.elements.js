import styled from 'styled-components';

export const MovieCard = styled.div`
    padding: 1rem;
    border: 1px solid #ccc;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, .2);
`;

export const Poster = styled.div`
    margin-bottom: 1.5rem;
`;

export const PosterImg = styled.img`
    max-width: 100%;
`;

export const CardDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CardText = styled.div`
    padding: 2rem 0;
    padding-right: 2rem;
    display: flex;
    align-items: center;
    border: 1px solid red;

    & > h3 {
        margin-right: 2rem;
    }
`;

export const CardControls = styled.div`
    border: 1px solid red;
`;