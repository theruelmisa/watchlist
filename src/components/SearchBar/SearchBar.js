import React, { useState } from 'react';

const SearchBar = () => {
    const [ term, setTerm ] = useState('');

    const onInputChange = e => {
        setTerm(e.target.value);
    }

    const onFormSubmit = e => {
        e.preventDefault();

        // Get prop from parent here 

        // Then do cleanup
        setTerm('');
    }

    return (
        <div>
            <h1>Search Bar</h1>
            <form onSubmit={onFormSubmit}>
                <input type='text' value={term} onChange={onInputChange} placeholder="Search Movies" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
};

export default SearchBar;
