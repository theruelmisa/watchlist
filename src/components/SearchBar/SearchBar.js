import React, { useState, useEffect } from 'react';
import { tmdb } from '../../apis';
import { movieRequests } from '../../apis/requests';
import { SearchBarContainer } from './SearchBar.elements';

const SearchBar = ({ onFormSubmit }) => {
    const [ term, setTerm ] = useState('');

    

    const onInputChange = e => {
        setTerm(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();

        onFormSubmit(term);
        setTerm('');
    }

    return (
        <SearchBarContainer>
            <form onSubmit={onSubmit}>
                <input type='text' value={term} onChange={onInputChange} placeholder="Search Movies" />
                <button type="submit">Search</button>
            </form>
        </SearchBarContainer>

    )
};

export default SearchBar;


// Create a context object to house this so we can use it for every thing

// useEffect(() => {

//     termSubmitHandler();

// }, [selectedMovie]);

