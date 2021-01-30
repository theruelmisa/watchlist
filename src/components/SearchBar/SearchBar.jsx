import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { 
    SearchForm,
    InputField,
    SearchButton
} from './SearchBar.elements';

const SearchBar = ({ formSubmitHandler }) => {
    const [ term, setTerm ] = useState('');

    const inputChangeHandler = e => {
        setTerm(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();

        formSubmitHandler(term);
        setTerm('');
    }

    return (
        <SearchForm onSubmit={submitHandler}>
            <InputField type='text' value={term} onChange={inputChangeHandler} placeholder="Search Movies" />
            <SearchButton 
                type="submit" 
                disabled={term === '' ? true : false}
            >
                <IoSearch />
            </SearchButton>
        </SearchForm>
    )
};

export default SearchBar;



