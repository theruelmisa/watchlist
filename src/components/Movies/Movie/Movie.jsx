import React from 'react';
import { Poster, PosterImg, MovieDetails } from './Movie.elements';
import { baseImageURL } from '../../../apis/tmdb';

const Movie = ({movie, savedMovies, onSaveMovie, onRemoveMovie}) => {
    // vote_average
    console.log(movie)
    return(
        <Poster>
            <PosterImg src={`${baseImageURL}/${movie.poster_path}`} alt={movie.title} />
            <div>
                <MovieDetails>
                    <h3>{movie.title}</h3>
                    <p>{movie.vote_average}</p>
                </MovieDetails>
            </div>
            
        </Poster>
    ) 
}

export default Movie;