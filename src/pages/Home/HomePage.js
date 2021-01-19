import React, { useState } from 'react';
import { SearchBar, MovieList, Header } from '../../components';
import { movieRequests } from '../../apis/requests';
import { PageContainer } from '../../globalStyles';

const HomePage = () => {

    return (
        <PageContainer>
            <SearchBar />
            <MovieList title="Now Showing" fetchUrl={ movieRequests.nowPlayingMovies }/>
        </PageContainer>
    )
}

export default HomePage
