import styled from 'styled-components';
import { Section, Row, Button } from '../../../globalStyles';

export const MovieSection = styled(Section)`
    height: 100%;
    width: 100%;
    padding: 3rem 10rem;
    padding-bottom: 0;
`;


export const MovieBackdrop = styled.img`
    object-fit: fill;
    height: 50vh;
    width: 100%;
    box-shadow: 0 3px 15px rgba(0, 0, 0, .40); 
    margin-bottom: 2rem;
`;

export const TitleContainer = styled(Row)`
    width: 100%;
    justify-content: start;
`;

export const TitleCard = styled.div`
    margin-bottom: 2rem;
    margin-right: 2rem;
    padding: 1rem 0;
`;

export const Title = styled.h3`
    color: #3c3c3c;
    font-size: 2.5rem;
    margin-right: 2rem;
    margin-bottom: .5rem;
`;

export const Rating = styled.p`
    font-size: 1.1rem;
    font-weight: 700;
`;

export const Description = styled.p`
    font-size: 1.4rem;
    margin-bottom: 3rem;
`;

export const AddButton = styled(Button)`
    color: #fafafa;
    background-color: #136deb;
`;

export const RemoveButton = styled(Button)`
    color: #d00;
    border: 2px solid #d00;
    background-color: inherit;
`;