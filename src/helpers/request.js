import axios from 'axios';
import jwtDecode from 'jwt-decode';
const http = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
});

http.interceptors.request.use(function (config) {

    let token = localStorage.getItem('token');
    if (token !== null) {
        var tokenDecoded=jwtDecode(token);
        config.headers.Authorization = `Bearer ${token}`
    }
    // config.headers.Authorization=null;
    return config;
})
export { http };
axios.defaults.headers.common["Authorization"]=localStorage.getItem('token')