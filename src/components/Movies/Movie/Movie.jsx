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

    const movieImg = poster_path ? `${ baseImageURL }${ poster_path }`
    : 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80';

    return (
        <MovieContainer>
            <MoviePoster src={ movieImg } alt={ title } />
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
