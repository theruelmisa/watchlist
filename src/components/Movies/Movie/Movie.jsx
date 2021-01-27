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
            <button>Save Movie</button>
            <h3>{movie.title}</h3>
            <div>
                <p>rating: {movie.vote_average} / 10</p>
            </div>
            <p>{movie.overview}</p>
        </MovieSection>
    )
}

export default Movie

