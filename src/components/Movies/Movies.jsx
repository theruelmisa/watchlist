import React, { useState, useEffect } from 'react';
import Movie from './Movie/Movie';
import { MoviesContainer } from './Movies.elements';

const Movies = ({ movies }) => {
    const [ selectedMovie, setSelectedMovie ] = useState(movies[0]);
    

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