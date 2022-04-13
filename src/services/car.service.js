import {axiosService} from "./axios.service";

import {urls} from "../constans";

const carService = {
    getAll: () => axiosService.get(urls.cars), // get витягуємо інфу з сервера
    getById: (id) => axiosService.get(`${urls.cars}/${id}`),
    create: (car) => axiosService.post(urls.cars, car),  // post записуємо інфу на сервер
    updateById: (id, newCar) => axiosService.put(`${urls.cars}/${id}`, newCar),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}

// CRUD
// Create
// Read
// Update
// Delete