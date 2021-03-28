import React from 'react';
import { Poster, PosterImg } from './Movie.elements';
import { baseImageURL } from '../../../apis/tmdb';

const Movie = ({movie}) => {
    // vote_average
    console.log(movie)
    return(
        <Poster>
            <PosterImg src={`${baseImageURL}/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
        </Poster>
    ) 
}

export default Movie;