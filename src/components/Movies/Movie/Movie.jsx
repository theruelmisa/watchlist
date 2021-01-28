import React from 'react';
import {
    MovieSection,
    MovieBackdrop,
    TitleContainer,
    TitleCard,
    Title,
    Rating,
    Description,
    AddButton,
    RemoveButton
} from './Movie.elements';

const Movie = ({ movie, baseImageURL, savedMovies, addMovieHandler, removeMovieHandler, showModalHandler }) => {

    // console.log(movie);

    const addMovieClick = movie => {
        addMovieHandler(movie);
        showModalHandler();
    }

    const removeMovieClick = id => {
        removeMovieHandler(id);
        showModalHandler();
    }

    let renderedButton = (<AddButton onClick={() => addMovieClick(movie)}> Add to Watchlist </AddButton>);

    savedMovies.filter(savedMovie => {
        if (savedMovie.id === movie.id) {
            renderedButton = (<RemoveButton onClick={() => removeMovieClick(savedMovie.id)}> Remove from Watchlist </RemoveButton>);
        }
    })

    return (
        <MovieSection>
            <MovieBackdrop src={`${baseImageURL}${movie.backdrop_path}`} alt={movie.movietitle} />
            <TitleContainer>
                <TitleCard>
                    <Title>{movie.title}</Title>
                    <Rating>rating: {movie.vote_average} / 10</Rating>
                </TitleCard>

                { renderedButton }
            </TitleContainer>
            <Description>{movie.overview}</Description>

        </MovieSection>
    )
}

export default Movie

