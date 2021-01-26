import React from 'react';
import {
    MovieSection,
    MovieBackdrop
} from './Movie.elements';

const Movie = ({ movie, baseImageURL }) => {

    console.log(movie);

    return (
        <MovieSection>
            <MovieBackdrop src={`${baseImageURL}${movie.backdrop_path}`} alt={movie.movietitle} />
            <h3>{movie.title}</h3>
        </MovieSection>
    )
}

export default Movie

