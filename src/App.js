import React, { useState, useEffect } from 'react';
import GlobalStyles, { PageContainer } from './globalStyles';
import { 
    Navbar, 
    SearchBar, 
    Movies 
} from './components';
import { movieRequests } from './apis/requests';
import { tmdb } from './apis';

const App = () => {
    const [ movies, setMovies ] = useState([]);
    const [ savedMovies, setSavedMovies ] = useState([]);
    const [ selectedCategory, setSelectedCategory ] = useState('Now Showing');

    useEffect( () => {
        fetchMovies();
    }, [])

    useEffect( () => {
        const watchList = JSON.parse(localStorage.getItem('watch-list'));
        setSavedMovies(watchList);
    }, [])

    const saveToLocalStorage = items => {
        localStorage.setItem('watch-list', JSON.stringify(items));
    }
    
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

    const addMovieHandler = movie => {
        
        const newSavedList = [ ...savedMovies, movie ];
        setSavedMovies(newSavedList);
        saveToLocalStorage(newSavedList);
    }

    const removeMovieHandler = id => {
        const filteredSavedMovies = savedMovies.filter( movie => movie.id !== id);

        setSavedMovies(filteredSavedMovies);
        saveToLocalStorage(filteredSavedMovies);
    }


    return (
        <>
            <GlobalStyles />
            <PageContainer>
                <Navbar />
                <SearchBar formSubmitHandler={searchMovie} />
                <Movies 
                    movies={movies} 
                    heading={selectedCategory} 
                    addMovieHandler={addMovieHandler} 
                    removeMovieHandler={removeMovieHandler} 
                    savedMovies={savedMovies}
                />
                <Movies 
                    movies={savedMovies} 
                    heading="Watch list" 
                    removeMovieHandler={removeMovieHandler} 
                    savedMovies={savedMovies} 
                    savedMoviesList
                />
            </PageContainer>
        </>
    )
};

export default App;

// TODO: 

// Finish styling of Navbar
// Create a categories section for people to quickly choose from
// Create a search results = 0 component for Movies component
// See how to add Gsap to project