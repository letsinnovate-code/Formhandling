import axios from 'axios'

const axiosapi = axios.create({
    baseURL: "http://localhost:3000/",

})

export default axiosapi