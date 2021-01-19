import React, { useState, useEffect } from 'react';
import { tmdb } from '../../apis';
import { movieRequests } from '../../apis/requests';
import { SearchBarContainer } from './SearchBar.elements';

const SearchBar = () => {
    const [ term, setTerm ] = useState('');
    const [ movie, setMovie ] = useState({});

    useEffect(() => {

        async function fetchData() {
            const request = await tmdb.get(movieRequests.searchMovie, {
                params: {
                    query: term
                }
            })
            console.log(request)
            setMovie(request.data.results);
            return request;
        };

        fetchData();

    }, [term])

    console.log(movie)
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
