import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';  // URL вашего Django API

export const getNews = () => {
    return axios.get(`${API_URL}news/`);
};

export const getEvents = () => {
    return axios.get(`${API_URL}events/`);
};