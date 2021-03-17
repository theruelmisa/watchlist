import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import { Header, Sidebar, Movies } from './components';
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


    return (
        <>
            <Router>
                <GlobalStyles />
                <Header handleSearchMovie={handleSearchMovie} />
                <div style={{ display: 'flex'}}>
                    <Sidebar />
                    <Switch>
                        <Route exact path="/">
                            <Movies title="Trending" fetchUrl={tmdbRequests.trending} movies={movies} onSetMovies={setMovies}/>
                        </Route>
                        <Route exact path="/favorites" movies={savedMovies}>
                            <Movies title="Favorites" />
                        </Route>
                        <Route exact path="/upcoming">
                            <Movies title="Upcoming" fetchUrl={tmdbRequests.upcomingMovies} movies={movies} onSetMovies={setMovies}/>
                        </Route>
                        <Route exact path="/top-rated">
                            <Movies title="Top Rated" fetchUrl={tmdbRequests.topRatedMovies} movies={movies} onSetMovies={setMovies}/>
                        </Route>
                        <Route exact path="/now-showing">
                            <Movies title="Now Showing" fetchUrl={tmdbRequests.nowPlayingMovies} movies={movies} onSetMovies={setMovies}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    )
};

export default App;

// TODO: 

// REDO EVERY THING
// 2. Add more to tool bar such as welcome guest text
// 3. Movies based off categories
// 4. watchlist