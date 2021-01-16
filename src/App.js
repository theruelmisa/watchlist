import React from 'react';
import MovieList from './components/MovieList/MovieList';
import GlobalStyles from './globalStyles';

const App = () => {
    return (
        <div>
            <GlobalStyles />
            <h1>Watchlist</h1>
            <MovieList />
        </div>
    )
};

export default App;
