import React from 'react';
import { Poster, PosterImg, MovieDetails } from './Movie.elements';
import { baseImageURL } from '../../../apis/tmdb';

const Movie = ({movie}) => {
    // vote_average
    console.log(movie)
    return(
        <Poster>
            <PosterImg src={`${baseImageURL}/${movie.poster_path}`} alt={movie.title} />
            <MovieDetails>
                <h3>{movie.title}</h3>
            </MovieDetails>
        </Poster>
    ) 
}

export default Movie;