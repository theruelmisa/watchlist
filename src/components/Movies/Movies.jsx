import React from 'react';
import Movie from './Movie/Movie';

const Movies = ({ movies }) => {

    console.log(movies);

    return (
        <div>
            List of Movies
            {
                movies.map( movie => (
                    <Movie key={ movie.id } movie={ movie } />
                ))
            }
        </div>
    )
}

export default Movies;
