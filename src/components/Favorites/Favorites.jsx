import React from 'react';
import {
    FavoritesContainer,

} from './Favorites.elements';
import Movie from '../Movies/Movie/Movie';

const Favorites = ({ savedMovies, handleRemoveMovie }) => {
    
    if ( !savedMovies || savedMovies.length === 0 ) {
        return (
            <FavoritesContainer>
                <h3>You have no favorites.</h3>
            </FavoritesContainer>
        )
    };
    console.log(savedMovies)
    return (
        <FavoritesContainer>
            <h3>Favorites</h3>
            <div>
                {
                    savedMovies.map( movie => (
                        <Movie 
                            key={movie.id} 
                            movie={movie}
                            savedMovies={savedMovies}
                            onRemoveMovie={handleRemoveMovie}
                            favorites
                        />
                    ))
                }
            </div>
        </FavoritesContainer>
    )
}

export default Favorites
