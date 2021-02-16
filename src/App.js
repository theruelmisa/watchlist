import React, { useState, useEffect } from 'react';
import tmdb, { movieRequests } from './apis/tmdb';
import { Header, Movies } from './components';
import GlobalStyles from './globalStyles';


const App = () => {
    const [ movies, setMovies ] = useState([]);
    const [ savedMovies, setSavedMovies ] = useState([]);

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
        return response;
    }
    
    const handleSaveMovie = movie => {
        
        const newSavedList = [ ...savedMovies, movie ];
        setSavedMovies(newSavedList);
        saveToLocalStorage(newSavedList);
    }

    const handleRemoveMovie = id => {
        const filteredSavedMovies = savedMovies.filter( movie => movie.id !== id);

        setSavedMovies(filteredSavedMovies);
        saveToLocalStorage(filteredSavedMovies);
    }


    return (
        <>
            <GlobalStyles />
            <div>
                <Header searchMovie={ searchMovie }/>
                <Movies movies={ movies } handleSaveMovie={ handleSaveMovie } handleRemoveMovie={ handleRemoveMovie } />
            </div>
        </>
    )
};

export default App;

// TODO: 

// REDO EVERY THING
// 2. Search Results
// 3. Watchlist
// 4. Footer 