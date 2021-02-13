import React from 'react'
import { baseImageURL } from '../../../apis/tmdb';
import { 
    MovieContainer, 
    MoviePoster, 
    MovieInfo, 
    MovieTitle,
    MovieRating,
    SaveButton 
} from './Movie.elements';
import { Row } from '../../../globalStyles';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

const Movie = ({ title, vote_average, poster_path, isSaved }) => {

    return (
        <MovieContainer>
            <MoviePoster src={`${ baseImageURL }${ poster_path }`} alt={ title } />
            <Row>
                <MovieInfo>
                    <MovieTitle>{ title }</MovieTitle> 
                    <MovieRating>{ vote_average.toFixed(1) }</MovieRating>
                </MovieInfo>
                <SaveButton saved={ isSaved }>
                    { isSaved ? <IoHeart /> : <IoHeartOutline /> }
                </SaveButton>
            </Row>           
        </MovieContainer>
    )
}

export default Movie;
