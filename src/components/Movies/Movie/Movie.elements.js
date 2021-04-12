import styled, { css } from 'styled-components';

export const MovieCard = styled.div`
    padding: 1.5rem;
    border: 1px solid #ccc;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, .2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${({ favorites }) => favorites && `
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        box-shadow: none;
        margin-bottom: 1rem;
    `};
`;

export const Poster = styled.div`
    margin-bottom: 1.5rem;

    ${({ favorites }) => favorites && `
        margin-bottom: 0;
        margin-right: 1rem;
        width: 8rem;
        height: 8rem;

    `};
`;

export const PosterImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const CardDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CardText = styled.div`
    padding: 1rem .5rem;
    margin-right: 1rem;
    margin-bottom: 1rem;

    & > h3 {
        margin-bottom: 1rem;
        font-size: 1.6rem;

    }

    & > p {
        font-size: 1.2rem;
        font-weight: 700;
    }

    ${({ favorites }) => favorites && `
        padding: 0;
        margin: 0;

        & > h3 {
            font-size: 1rem;
        }

        & > p {
            display: none;
        }
    `};
`;

export const CardControls = styled.div`
    flex-shrink: 0;
    margin-left: 2rem;
`;

const buttonBase = css`
    cursor: pointer;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    letter-spacing: .1rem;
    border-radius: .5rem;
    border: none;
    transition: .15s all ease-in;

    &:focus {
        outline: none;
    }
`;

export const SaveButton = styled.button`
    ${buttonBase};

    background-color: #3c3c3c;
    color: #fafafa;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, .3);

    &:hover {
        background-color: #5c5c5c;
    }
`;

export const RemoveButton = styled.button`
    ${buttonBase};

    background-color: inherit;
    color: #aaa;

    &:hover {
        color: #3c3c3c;
    }
`;

