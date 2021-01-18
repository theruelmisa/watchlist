import React, { useState, useEffect } from 'react';
import { tmdb } from '../../apis';
import { movieRequests } from '../../apis/requests'; 

const baseImageURL = 'http://image.tmdb.org/t/p/w185';
// Can also put original or any size (ex. w185)

const MovieList = () => {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await tmdb.get(movieRequests.upcoming)
            setMovies(request.data.results);
            return request;
        };

        fetchData();

    }, [movieRequests.upcoming])

    const renderedList = movies.map( movie => {
        return (
            <div key={movie.id}>
                <h1>{movie.title}</h1>
                <img src={`${baseImageURL}${movie.poster_path}`} alt={movie.title} />
            </div>
        )
    });

    console.log(movies)
    
    return ( 
        <div>
            <h1>This is a list of movies</h1>
            { renderedList }
        </div>
    );
}

export default MovieList;

// TODO:

// Create a requests file under apis or utils folder to house different fetch urls to be used 
// Create a SearchBar to search for movies via title (Try to add auto complete feature)