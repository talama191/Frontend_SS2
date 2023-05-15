import axios from 'axios';
const http = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
});

http.interceptors.request.use(function (config) {

    let token = localStorage.getItem('token');
    if (token !== "" || token !== null) config.headers.Authorization = `Bearer ${token}`
    // config.headers.Authorization=null;
    return config;
})
export { http };