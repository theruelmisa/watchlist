import React, { useState, useEffect } from 'react';
import { tmdb } from '../../apis';
import { movieRequests } from '../../apis/requests';
import { SearchBarContainer } from './SearchBar.elements';

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
        <SearchBarContainer>
            <form onSubmit={onFormSubmit}>
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

// const termSubmitHandler = async term => {
//     const response = await tmdb.get(movieRequests.searchMovie, {
//         params: {
//             query: term
//         }
//     });

//     console.log(response);
//     setSelectedMovie(response.data.results[0]);    
//     return response;
// };