import React from 'react';
import { 
    MovieCard, 
    Poster, 
    PosterImg, 
    CardDetails, 
    CardText, 
    CardControls,
    SaveButton, 
    RemoveButton
} from './Movie.elements';
import { baseImageURL } from '../../../apis/tmdb';

const Movie = ({movie, savedMovies, onSaveMovie, onRemoveMovie}) => {

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
                    <SaveButton type="click" onClick={() => onSaveMovie(movie)} >Save</SaveButton>
                    <RemoveButton type="click" onClick={() => onRemoveMovie(movie.id)} >Remove</RemoveButton>
                </CardControls>
            </CardDetails>
        </MovieCard>
            
    ) 
}

export default Movie;