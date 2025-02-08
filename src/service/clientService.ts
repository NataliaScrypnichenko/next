import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'http://185.69.152.209/carsAPI/v1',
});
