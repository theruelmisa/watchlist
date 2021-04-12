import styled from 'styled-components';

export const FavoritesContainer = styled.div`
    padding: 2rem;
    border-left: 1px solid #ccc;
    height: 100%;

    & > h3 {
        font-size: clamp(1.2rem, 1.6rem, 2rem);
        text-align: center;
        margin-bottom: 2rem;
    }
`;

