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
import { IoClose } from 'react-icons/io5'

const Movie = ({movie, savedMovies, onSaveMovie, onRemoveMovie, favorites}) => {
    // console.log(movie)
    return(
        <MovieCard favorites={favorites} >
            <Poster favorites={favorites} >
                <PosterImg src={`${baseImageURL}/${movie.poster_path}`} alt={movie.title} />
            </Poster>
        
            <CardDetails>
                <CardText favorites={favorites} >
                    <h3>{movie.title}</h3>
                    <p>{movie.vote_average}</p>
                </CardText>
                <CardControls>
                    
                    {
                        !favorites && !(savedMovies.includes(movie)) ? (

                            <SaveButton type="click" onClick={() => onSaveMovie(movie)} >Save</SaveButton>

                        ) : (
                            <RemoveButton type="click" onClick={() => onRemoveMovie(movie.id)} >
                                { favorites ? <IoClose /> : 'Remove' }
                            </RemoveButton>
                        )
                            
                    }
                    
                </CardControls>
            </CardDetails>
        </MovieCard>
            
    ) 
}

export default Movie;