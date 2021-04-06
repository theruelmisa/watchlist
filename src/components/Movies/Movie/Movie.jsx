import React from 'react';
import { 
    MovieCard, 
    Poster, 
    PosterImg, 
    CardDetails, 
    CardText, 
    CardControls,
    Button, 
} from './Movie.elements';
import { baseImageURL } from '../../../apis/tmdb';

const Movie = ({movie, savedMovies, onSaveMovie, onRemoveMovie}) => {
    // vote_average
    console.log(movie)
    return(
        <MovieCard>
            <Poster>
                <PosterImg src={`${baseImageURL}/${movie.poster_path}`} alt={movie.title} />
            </Poster>
        
            <CardDetails>
                <CardText>
                    <h3>{movie.title}</h3>
                    <p>{movie.vote_average}</p>
                </CardText>
                <CardControls>
                    <Button>Save</Button>
                    <Button>Remove</Button>
                </CardControls>
            </CardDetails>
        </MovieCard>
            
    ) 
}

export default Movie;