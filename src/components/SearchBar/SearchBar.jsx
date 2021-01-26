import React, { useState, useEffect } from 'react';
import { tmdb } from '../../apis';
import { movieRequests } from '../../apis/requests';
import { SearchBarContainer } from './SearchBar.elements';

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
        <SearchBarContainer>
            <form onSubmit={submitHandler}>
                <input type='text' value={term} onChange={inputChangeHandler} placeholder="Search Movies" />
                <button type="submit">Search</button>
            </form>
        </SearchBarContainer>

    )
};

export default SearchBar;



