import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles, { MainContainer } from './globalStyles';
import { Sidebar, Searchbar, Movies } from './components';
import tmdb, { tmdbRequests } from './apis/tmdb';


const App = () => {
    const [movies, setMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);

    const handleSearchMovie = async term => {
        const { data } = await tmdb.get(tmdbRequests.searchMovie, {
            params: {
                query: term
            }
        });

        setMovies(data.results);
    }

    const saveToLocalStorage = items => {
        localStorage.setItem('watch-list', JSON.stringify(items));
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
            <Router>
                <GlobalStyles />
                <MainContainer>
                    <Sidebar />
                    <div>
                        <Searchbar onSearchMovie={handleSearchMovie}/>
                        <Switch>
                            <Route exact path="/upcoming">
                                <Movies 
                                    title="Upcoming" 
                                    fetchUrl={tmdbRequests.upcomingMovies} 
                                    movies={movies}
                                    savedMovies={savedMovies} 
                                    onSetMovies={setMovies} 
                                    handleSaveMovie={handleSaveMovie} 
                                    handleRemoveMovie={handleRemoveMovie} 
                                />
                            </Route>
                            <Route exact path="/top-rated">
                                <Movies 
                                    title="Top Rated" 
                                    fetchUrl={tmdbRequests.topRatedMovies} 
                                    movies={movies}
                                    savedMovies={savedMovies} 
                                    onSetMovies={setMovies} 
                                    handleSaveMovie={handleSaveMovie} 
                                    handleRemoveMovie={handleRemoveMovie}
                                />
                            </Route>
                            <Route exact path="/now-showing">
                                <Movies 
                                    title="Now Showing" 
                                    fetchUrl={tmdbRequests.nowPlayingMovies} 
                                    movies={movies}
                                    savedMovies={savedMovies} 
                                    onSetMovies={setMovies} 
                                    handleSaveMovie={handleSaveMovie} 
                                    handleRemoveMovie={handleRemoveMovie}
                                />
                            </Route>
                            <Route exact path="/">
                                <Movies 
                                    title="Trending" 
                                    fetchUrl={tmdbRequests.trending} 
                                    movies={movies}
                                    savedMovies={savedMovies} 
                                    onSetMovies={setMovies} 
                                    handleSaveMovie={handleSaveMovie} 
                                    handleRemoveMovie={handleRemoveMovie}
                                />
                            </Route>
                        </Switch>
                    </div>
                    <Movies title="Favorites" movies={savedMovies}  handleRemoveMovie={handleRemoveMovie} favorites />
                </MainContainer>
            </Router>
        </>
    )
};

export default App;

