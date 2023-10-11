import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001"
});

export default instance; 

// axiosInstance.js
// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:3001',
// });

// // Ajouter un intercepteur pour ajouter l'en-tête d'autorisation à chaque requête
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('authToken');
//     console.log('token from axios', token);
//     if (token) {
//       config.headers.authorization = `Bearer ${token}`;
//     }
//     console.log('Request Configuration:', config);
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
