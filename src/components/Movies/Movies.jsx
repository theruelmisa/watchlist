import React, { useState, useEffect } from 'react'
import { MoviesContainer, MovieList } from './Movies.elements';
import Movie from './Movie/Movie';
import tmdb from '../../apis/tmdb';

const Movies = ({ title, fetchUrl, movies, onSetMovies, favorites, onSetSavedMovies }) => {

    useEffect(() => {
        if (!favorites) {
            fetchMovies();
        }
    }, [fetchUrl]);

    const fetchMovies = async () => {
        const { data } = await tmdb.get(fetchUrl);
        onSetMovies(data.results);
    };

    console.log(movies);


    return (
        <MoviesContainer>
            <h1>{title}</h1>
            <MovieList>
                {
                movies && movies.map( movie => (
                    <Movie key={movie.id} movie={movie}/>
                ))
                }
            </MovieList>
        </MoviesContainer>
    )
}

export default Movies;
