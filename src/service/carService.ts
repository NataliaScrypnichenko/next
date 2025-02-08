import axios from 'axios';

const apiUrl = 'http://185.69.152.209/carsAPI/v1';

// Функція для отримання списку автівок
export const getCars = async () => {
        const response = await axios.get(`${apiUrl}/cars`);
        return response.data; // Повертає список автомобілів
};

// Функція для створення нової автівки
export const createCar = async (car: { brand: string; price: number; year: number }) => {
        const response = await axios.post(`${apiUrl}/cars`, car);
        return response.data; // Повертає дані створеного автомобіля
};
