import React, { useState, useEffect } from 'react';
import { MovieDetails } from '..';
import { tmdb } from '../../apis';
import { baseImageURL } from '../../apis/requests';
import { Modal } from '../Modal/Modal';
import { 
    MovieListContainer,
    MovieListTitle,
    MoviesContainer,
    MovieCard,
    MoviePoster 
} from './MovieList.elements';

// const baseImageURL = 'http://image.tmdb.org/t/p/original';
// Can also put original or any size (ex. w185)

const MovieList = ({ title, fetchUrl }) => {
    const [ movies, setMovies ] = useState([]);
    const [ selectedMovie, setSelectedMovie ] = useState({});
    const [ showModal, setShowModal ] = useState(false);

    useEffect(() => {

        async function fetchData() {
            const response = await tmdb.get(fetchUrl)
            setMovies(response.data.results);
            setSelectedMovie(response.data.results[0]);
            return response;
        };

        fetchData();

    }, [fetchUrl]);

    const movieSelectHandler = movie => {
        setSelectedMovie(movie);
        showModalHandler();
    };

    const showModalHandler = () => {
        setShowModal(prev => !prev);
    };

    // Just display first 5 items
    const renderedList = movies.map( movie => {
        return (
            <MovieCard key={movie.id} onClick={() => movieSelectHandler(movie)}>
                <MoviePoster  src={`${baseImageURL}${movie.poster_path}`} alt={movie.title} />
            </MovieCard>
        )
    });

    
    console.log(selectedMovie);
    
    return ( 
        <>
            <Modal showModal={showModal} showModalHandler={showModalHandler}>
                <MovieDetails title={selectedMovie.title} baseImageURL={baseImageURL} />
            </Modal>
            <MovieListContainer>
                <MovieListTitle>{title}</MovieListTitle>
                <MoviesContainer>
                    { renderedList }
                </MoviesContainer>
            </MovieListContainer>
        </>
    );
}

export default MovieList;

// TODO:

// Create modal pop up every time user selects a movie from the list


// Figure out which file would be best to submit search term for searching movies and making call to tmdb api

