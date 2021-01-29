import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const SearchForm = styled.form`
    margin-bottom: 2rem;
    padding: 1rem;
    width: 40vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InputField = styled.input`
    border: none;
    border-bottom: 2px solid #3c3c3c;
    width: 50%;
    height: 100%;
    margin-right: 2rem;
    padding: 1rem;
    font-size: 1.4rem;
    caret-color: #3c3c3c;

    transition: width 0.8s ease;

    &:focus {
        outline: none;
        width:100%;
    }

`;

export const SearchButton = styled(Button)`
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
    background-color: ${props => props.disabled ? '#aaa' : 'black'};
    color: #fafafa;
`;