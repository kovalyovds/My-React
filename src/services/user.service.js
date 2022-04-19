import {axiosService} from "./axios.service";
import {urls} from "../constants";

const userService = {
    getAll: ()=> axiosService.get(urls.user),
    getById: (id)=> axiosService.get(`${urls.user}/${id}`)
}

export {
    userService
}