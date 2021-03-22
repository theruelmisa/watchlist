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
    border: 1px solid red;
`;

export const TextField = styled.input`
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 10rem;
    padding: .5rem 1rem;
    padding-left: 3.5rem;

    &:focus {
        outline: none;
    }
`;

export const SearchButton = styled(IoSearch)`
    position: absolute;
    margin-left: 1rem;
`;