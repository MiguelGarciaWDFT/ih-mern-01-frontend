// ./client/src/config/axios.js

import axios from 'axios'

const axiosClient = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL
})
//HACE PETICIONES A LA API DE BACKEND
export default axiosClient