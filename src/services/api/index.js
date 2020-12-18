import axios from 'axios';

const token = localStorage.getItem('authToken');

const api = axios.create({
    baseURL: 'https://ka-users-api.herokuapp.com',
    headers: {
        Authorization: token
    }
})

export default api