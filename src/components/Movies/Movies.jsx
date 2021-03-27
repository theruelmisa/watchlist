import React, { useState, useEffect } from 'react'
import { MoviesContainer, MovieList } from './Movies.elements';
import tmdb, { baseImageURL } from '../../apis/tmdb';

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
                    <div key={movie.id}>
                        <img src={`${baseImageURL}/${movie.poster_path}`} alt={movie.title} />
                        <h3 key={movie.id}>{movie.title}</h3>
                    </div>
                ))
                }
            </MovieList>
        </MoviesContainer>
    )
}

export default Movies;
