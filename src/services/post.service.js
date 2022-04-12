import {urls} from "../constans";
import {axiosService} from "./axios.service";

const postService = {
    getPostById: (userId)=> axiosService.get(`${urls.posts}?userId=${userId}`)
}

export {
    postService
}