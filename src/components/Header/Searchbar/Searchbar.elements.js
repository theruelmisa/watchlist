import styled from 'styled-components';
import { Button } from '../../../globalStyles';

export const SearchForm = styled.form`
    flex: 0 0 20%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 3rem;

`;

export const InputField = styled.input`
    flex: 0 0 80%;
    font-family: inherit;
    font-size: 1.4rem;
    border: none;
    border-radius: 10rem;
    background-color: #f4f2f2;
    box-shadow: 1px 5px 15px #f0eeee;
    margin-right: -3.5rem;
    padding: .7rem 2rem;
    caret-color: #3c3c3c;
    transition: flex-basis 0.3s ease;

    &:focus {
        outline: none;
        flex-basis:100%;
        background-color: #f0eeee;
    }
    &:focus + button  {
        background-color: #f0eeee;
    }
`;

export const SearchButton = styled(Button)`
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
    padding: 0;
    border-radius: 10rem;
    background-color: #f4f2f2;
    color: #3c3c3c;
`;