import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const getNews = () => {
    return axios.get(`${API_URL}news/`);
};

export const getEvents = () => {
    return axios.get(`${API_URL}events/`);
};