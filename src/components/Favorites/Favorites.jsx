import React from 'react';
import Movie from '../Movies/Movie/Movie';

const Favorites = ({ savedMovies, handleRemoveMovie }) => {
    
    if ( !savedMovies || savedMovies.length === 0 ) {
        return (
            <div>
                <h3>You have no favorites.</h3>
            </div>
        )
    };
    console.log(savedMovies)
    return (
        <div>
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
        </div>
    )
}

export default Favorites
