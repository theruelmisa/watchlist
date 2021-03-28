import react from 'react';
import { Poster } from './Movie.elements';
import { baseImageURL } from '../../../apis/tmdb';

const Movie = ({ movie }) => {
    return(
        <Poster>
            <img src={`${baseImageURL}/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
        </Poster>
    )
}

export default Movie;