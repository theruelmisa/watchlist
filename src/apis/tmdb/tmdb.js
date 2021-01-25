import axios from 'axios';

const KEY = '';
const url = 'https://api.themoviedb.org/3';

const instance = axios.create({
    baseURL: url,
    params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
        language: 'en-US'
    }
});


export default instance;