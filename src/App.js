import React, { useState, useEffect } from 'react';
import GlobalStyles, { PageContainer } from './globalStyles';
import { SearchBar, Movies } from './components';
import { movieRequests } from './apis/requests';
import { useMovies } from './hooks';
import { tmdb } from './apis';

const App = () => {
    // const [ movies, search ] = useMovies('Lord of the rings');
    const [ movies, setMovies ] = useState([]);
    const [ savedMovies, setSavedMovies ] = useState([]);
    const [ selectedCategory, setSelectedCategory ] = useState('Now Showing');

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
        setSelectedCategory('Search Results');
        return response;
    }
    
    const categorySelectHandler = (category) => {
        // Take argument for category select 
        // setSelectedCategory(category)
    }

    const saveMovieHandler = movie => {
        
        const newSavedList = [ ...savedMovies, movie ];
        setSavedMovies(newSavedList);
    }

    const removeMovieHandler = id => {
        const filteredSavedMovies = savedMovies.filter( movie => movie.id !== id);

        setSavedMovies(filteredSavedMovies);
    }

    console.log(savedMovies);

    return (
        <>
            <GlobalStyles />
            <PageContainer>
                <SearchBar formSubmitHandler={searchMovie} />
                <Movies movies={movies} heading={selectedCategory} saveMovieHandler={saveMovieHandler} savedMovies={savedMovies}/>
                <Movies movies={savedMovies} heading="Watch list" removeMovieHandler={removeMovieHandler} savedMovies={savedMovies} savedMoviesList/>
            </PageContainer>
        </>
    )
};

export default App;

// TODO: 

// Finish styling Movie Modal component
// Create a categories section for people to quickly choose from
// Create a search results = 0 component for Movies component
// Figure out render of button