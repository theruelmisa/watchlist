import React, { useState, useEffect } from 'react'
import { MoviesContainer, MovieList, CategoryName } from './Movies.elements';
import Movie from './Movie/Movie';
import tmdb from '../../apis/tmdb';

const Movies = ({ title, fetchUrl, movies, onSetMovies, favorites, savedMovies, handleSaveMovie, handleRemoveMovie }) => {

    useEffect(() => {
        fetchMovies();
    }, [fetchUrl]);

    const fetchMovies = async () => {
        const { data } = await tmdb.get(fetchUrl);
        onSetMovies(data.results);
    };



    return (
        <MoviesContainer>
            <CategoryName>{title}</CategoryName>
            <MovieList>
                {
                movies && movies.map( movie => (
                    <Movie 
                        key={movie.id} 
                        movie={movie}
                        savedMovies={savedMovies}
                        onSaveMovie={handleSaveMovie}
                        onRemoveMovie={handleRemoveMovie}
                    />
                ))
                }
            </MovieList>
        </MoviesContainer>
    )
}

export default Movies;
