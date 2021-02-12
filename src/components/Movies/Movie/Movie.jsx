import React from 'react'
import { baseImageURL } from '../../../apis/tmdb';
import { MovieContainer, MoviePoster, MovieInfo } from './Movie.elements';

const Movie = ({ title, vote_average, poster_path }) => {

    return (
        <MovieContainer>
            <MoviePoster src={`${ baseImageURL }${ poster_path }`} alt={ title } />
            <MovieInfo>
                <h3>{ title }</h3> 
                <span>{ vote_average.toFixed(1) }</span>
            </MovieInfo>
        </MovieContainer>
    )
}

export default Movie;
