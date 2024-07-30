import axios from 'axios';
import { environment } from "../environments/environment.dev";
import { getJwtToken } from '../data/utils/auth';
import { PUBLIC_URLS } from '../data/utils/auth';

const axiosInstance = axios.create({
  baseURL: environment.BACKEND_URL, // Replace with your API base URL
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify request config before sending request
    // For example, add authentication token
    const token = getJwtToken();
    if (!PUBLIC_URLS.includes(config.url)) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx causes this function to trigger
    return response;
  },
  (error) => {
    // Any status codes outside the range of 2xx cause this function to trigger
    if (error.response.status === 401) {
      // Handle unauthorized errors (e.g., redirect to login)
      // You might want to log out the user or redirect them
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
