import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import { Header, Sidebar, Movies } from './components';
import tmdb, { movieRequests } from './apis/tmdb';


const App = () => {
    const [movies, setMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);

    const handleSearchMovie = async term => {
        const response = await tmdb.get(movieRequests.searchMovie, {
            params: {
                query: term
            }
        });

        setMovies(response.data.results);
    }

    console.log(movies)

    return (
        <>
            <Router>
                <GlobalStyles />
                <Header handleSearchMovie={handleSearchMovie} />
                <Sidebar />
                <Switch>
                    <Route exact path="/">
                        <Movies title="Trending" fetchUrl={movieRequests.popularMovies} movies={movies}/>
                    </Route>
                    <Route exact path="/favorites" movies={savedMovies}>
                        <Movies title="Favorites" />
                    </Route>
                    <Route exact path="/upcoming">
                        <Movies title="Upcoming" />
                    </Route>
                    <Route exact path="/top-rated">
                        <Movies title="Top Rated" />
                    </Route>
                    <Route exact path="/now-showing">
                        <Movies title="Now Showing" />
                    </Route>
                </Switch>
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