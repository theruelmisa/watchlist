import React, { useState, useEffect } from 'react'
import tmdb from '../../apis/tmdb';

const Movies = ({ title, fetchUrl, movies, onSetMovies }) => {

    useEffect(() => {
        fetchMovies();
    }, [fetchUrl]);

    const fetchMovies = async () => {
        const { data } = await tmdb.get(fetchUrl);
        onSetMovies(data.results);
    };

    console.log(movies);


    return (
        <div>
            <h1>{title}</h1>
            {
                movies && movies.map( movie => (
                    <h3 key={movie.id}>{movie.title}</h3>
                ))
            }
        </div>
    )
}

export default Movies;
