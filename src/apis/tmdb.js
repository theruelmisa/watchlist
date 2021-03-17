import axios from 'axios';

const url = 'https://api.themoviedb.org/3';

const instance = axios.create({
    baseURL: url,
    params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
        language: 'en-US'
    }
});

// Movie Requests 

export const tmdbRequests = {
    searchMovie: '/search/movie',
    upcomingMovies: '/movie/upcoming',
    nowPlayingMovies: '/movie/now_playing',
    popularMovies: '/movie/popular',
    latestMovies: '/movie/latest',
    topRatedMovies: '/movie/top_rated',
    trending: '/trending/movie/week'
}

export const baseImageURL = 'http://image.tmdb.org/t/p/original';


export default instance;