import React, { useState, useEffect } from 'react';
import GlobalStyles, { PageContainer } from './globalStyles';
import { SearchBar, Movies } from './components';
import { movieRequests } from './apis/requests';
import { useMovies } from './hooks';
import { tmdb } from './apis';

const App = () => {
    // const [ movies, search ] = useMovies('Lord of the rings');
    const [ movies, setMovies ] = useState([]);
    const [ category, setCategory ] = useState('Now Showing');

    useEffect( () => {
        fetchMovies();
    }, [])
    
    const fetchMovies = async () => {
        const response = await tmdb.get('/movie/now_playing');
        setMovies(response.data.results);
    };

    const searchMovie = async term => {
        const response = await tmdb.get(movieRequests.searchMovie, {
            params: {
                query: term
            }
        });
    
        setMovies(response.data.results);
        setCategory('Search Results');
        return response;
    }


    return (
        <>
            <GlobalStyles />
            <PageContainer>
                <Movies movies={movies} heading={category} />
            <SearchBar formSubmitHandler={searchMovie} />
            </PageContainer>
        </>
    )
};

export default App;
