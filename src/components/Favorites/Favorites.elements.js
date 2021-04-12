import styled from 'styled-components';

export const FavoritesContainer = styled.div`
    border: 1px solid red;
    padding: 2rem;

    & > h3 {
        font-size: clamp(1.2rem, 1.6rem, 2rem);
        text-align: center;
        margin-bottom: 2rem;
    }
`;

