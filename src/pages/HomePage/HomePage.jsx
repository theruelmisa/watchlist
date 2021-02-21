import React from 'react';
import { PageGrid } from '../../globalStyles';
import { Searchbar } from '../../components';

const HomePage = ({ searchMovie }) => {
    return ( 
        <PageGrid>
            <Searchbar onSearchMovie={ searchMovie } />
        </PageGrid>
    );
}

export default HomePage;