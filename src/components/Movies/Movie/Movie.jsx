import React from 'react';
import {
    MovieSection,
    MovieBackdrop
} from './Movie.elements';

const Movie = ({ movie, baseImageURL, savedMovies, saveMovieHandler, removeMovieHandler, showModalHandler }) => {

    console.log(movie);

    const saveMovieClick = movie => {
        saveMovieHandler(movie);
        showModalHandler();
    }

    const removeMovieClick = id => {
        removeMovieHandler(id);
        showModalHandler();
    }

    let renderedButton = <button onClick={() => saveMovieClick(movie)}> Save </button>;

    return (
        <MovieSection>
            <MovieBackdrop src={`${baseImageURL}${movie.backdrop_path}`} alt={movie.movietitle} />
            { renderedButton }
            <h3>{movie.title}</h3>
            <div>
                <p>rating: {movie.vote_average} / 10</p>
            </div>
            <p>{movie.overview}</p>
        </MovieSection>
    )
}

export default Movie

