import { useState, useEffect } from 'react';
import { tmdb } from '../apis';
import { movieRequests } from '../apis/requests';

const useMovies = (defaultTerm) => {
    const [ movies, setMovies ] = useState([]);

    // setSelectedMovie(response.data.results[0]);   
    useEffect(() => {
        search(defaultTerm);
    }, [defaultTerm]); 

    const search = async term => {
        const response = await tmdb.get(movieRequests.searchMovie, {
            params: {
                query: term
            }
        });
    
        console.log(response.data.results);
        setMovies(response.data.results);
        return response;
    };

    return [ movies, search ];
};

export default useMovies;