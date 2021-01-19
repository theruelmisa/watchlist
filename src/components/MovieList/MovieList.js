import React, { useState, useEffect } from 'react';
import { tmdb } from '../../apis';
import { baseImageURL } from '../../apis/requests';
import { 
    MoviesContainer,
    MovieCard,
    MoviePoster 
} from './MovieList.elements';

// const baseImageURL = 'http://image.tmdb.org/t/p/original';
// Can also put original or any size (ex. w185)

const MovieList = ({ title, fetchUrl }) => {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await tmdb.get(fetchUrl)
            setMovies(request.data.results);
            return request;
        };

        fetchData();

    }, [fetchUrl])
    // Just display first 5 items
    const renderedList = movies.map( movie => {
        return (
            <MovieCard key={movie.id}>
                <MoviePoster  src={`${baseImageURL}${movie.poster_path}`} alt={movie.title} />
            </MovieCard>
        )
    });

    
    return ( 

        <div>
            <h1>{title}</h1>
            <MoviesContainer>
                { renderedList }
            </MoviesContainer>
        </div>
    );
}

export default MovieList;

// TODO:


// Figure out which file would be best to submit search term for searching movies and making call to tmdb api

