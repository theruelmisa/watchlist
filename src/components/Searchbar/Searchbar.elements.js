import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const SearchForm = styled.form`
    display: flex;
    margin-right: 3rem;
    width: 100%;
    height: 6rem;
`;

export const InputField = styled.input`
    width: 80%;
    font-family: inherit;
    font-size: 1.5rem;
    border: none;
    margin-left: -2.5rem;
    background-color: #f4f2f2;
    box-shadow: 1px 5px 15px #f0eeee;
    padding: .7rem 4rem;
    caret-color: #3c3c3c;


    &:focus {
        outline: none;
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
    color: #3c3c3c;
    background-color: #f4f2f2;
    z-index: 2;
    margin-left: 1rem;
    font-size: 1.6rem;
`;