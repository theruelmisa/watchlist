import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import Movie from './Movie/Movie';
import { baseImageURL } from '../../apis/requests';
import { 
    MoviesSection,
    MoviesContainer,
    MoviesContainerTitle,
    MovieCard,
    MoviePoster 
} from './Movies.elements';

const Movies = ({ movies, heading }) => {
    const [ selectedMovie, setSelectedMovie ] = useState({});
    const [ showModal, setShowModal ] = useState(false);

    const movieSelectHandler = movie => {
        setSelectedMovie(movie);
        showModalHandler();
    }

    const showModalHandler = () => {
        setShowModal(prev => !prev);
    }


    const renderedList = movies.filter( movie => movie.poster_path && movie.backdrop_path).map( movie => (
        <MovieCard key={movie.id} onClick={() => movieSelectHandler(movie)}>
            <MoviePoster  src={`${baseImageURL}${movie.poster_path}`} alt={movie.title} />
        </MovieCard>
    ));
                                
    return ( 
        <>
            <Modal showModal={showModal} showModalHandler={showModalHandler}>
                <Movie baseImageURL={baseImageURL} movie={selectedMovie} />
            </Modal>
            {
                movies.length > 0 ? 
                (
                    <MoviesSection>
                        <MoviesContainerTitle>{heading}</MoviesContainerTitle>
                        <MoviesContainer>
                            {renderedList}
                        </MoviesContainer>
                    </MoviesSection>
                ) : ( 
                    <div> 
                        <h1>Can't find that movie</h1>
                    </div> 
                )
            }
        </>
    );
}

export default Movies;

