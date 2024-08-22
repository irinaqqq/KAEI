import axios from 'axios';

// const API_URL = 'http://localhost:8000/api/';
// const API_URL = 'http://env-3063293.jcloud.kz:8000/api/';
const API_URL = 'https://kaei.kz/api/';
export const getNews = () => {
    return axios.get(`${API_URL}news/`);
};

export const getEvents = () => {
    return axios.get(`${API_URL}events/`);
};

