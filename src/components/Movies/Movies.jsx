import React from 'react';
import Movie from './Movie/Movie';
import { MoviesContainer } from './Movies.elements';

const Movies = ({ movies }) => {

    console.log(movies);

    return (
        <>
            <MoviesContainer>
            {
                movies.map( movie => (
                    <Movie key={ movie.id } { ...movie } />
                ))
            }
            </MoviesContainer>
        </>
    )
}

export default Movies;

// TODO:

// Add a selected Movie Panel with state, click handler