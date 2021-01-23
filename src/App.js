import React, { useState, useEffect } from 'react';
import GlobalStyles, { PageContainer } from './globalStyles';
import { SearchBar, MovieList } from './components';
import { movieRequests } from './apis/requests';
import { useMovies } from './hooks';

const App = () => {
    const [ movies, search ] = useMovies('Lord of the rings');


    return (
        <>
            <GlobalStyles />
            <PageContainer>
            <SearchBar onFormSubmit={search} />
            <MovieList title="Now Showing" fetchUrl={ movieRequests.nowPlayingMovies }/>
            <MovieList title="Upcoming" fetchUrl={ movieRequests.upcomingMovies }/>
            </PageContainer>
        </>
    )
};

export default App;
