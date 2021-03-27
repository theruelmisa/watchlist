import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5'

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8rem;
    margin-bottom: 2rem;
`;

export const InputGroup = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    padding: 1rem;
    font-size: 2rem;
    position: relative;
`;

export const TextField = styled.input`
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 10rem;
    padding: 1rem;
    padding-left: 3.5rem;
    font-size: 1.4rem;
    caret-color: #3c3c3c;
    color: #3c3c3c;
    font-family: inherit;

    &:focus {
        outline: none;
        box-shadow: 2px 3px 3px rgba(0, 0, 0, .2);
    }
`;

export const SearchButton = styled(IoSearch)`
    position: absolute;
    margin-left: 1rem;
`;