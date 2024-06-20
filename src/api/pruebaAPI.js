import axios from "axios";
const {VITE_API_URL} = {...import.meta.env}

const pruebaAPI = axios.create({
    baseURL: VITE_API_URL,
})

pruebaAPI.interceptors.request.use(config=>{
    config.headers = {
        ...config.headers,
    }
    return config
})

export default pruebaAPI;