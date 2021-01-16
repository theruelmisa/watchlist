import axios from 'axios';

const KEY = '19237d69458b817b12891d1ea27c1fd0';
const url = 'https://api.themoviedb.org/3';

const instance = axios.create({
    baseURL: url,
    params: {
        api_key: KEY,
        language: 'en-US'
    }
});

// Requests
export const requests = {
    upcoming: '/movie/upcoming',
};

export default instance;