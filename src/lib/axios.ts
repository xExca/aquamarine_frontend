import axiosLib, { AxiosError, type InternalAxiosRequestConfig } from 'axios';
import Swal from 'sweetalert2';

const axios = axiosLib.create({
  baseURL: 'http://localhost:8000/api',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true, 
});

/** REQUEST interceptor (attach auth, etc.) */
axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers = config.headers ?? {};
      (config.headers as any).Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

/** RESPONSE interceptor (global error handling) */
axios.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<any>) => {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 401) {
        localStorage.removeItem('authToken');
        window.location.assign('/login'); // redirect to login
        return Promise.reject(error);
      }

      if (status === 422 && data?.errors) {
        // Normalize Laravel validation errors: { errors: { field: [..] } }
        const entries = Object.entries(
          data.errors as Record<string, string[]>
        );
        const messages = entries
          .map(([field, msgs]) => `${field}: ${msgs.join(', ')}`)
          .join(' | ');

        const err = new Error(messages || data?.message || 'Validation error');
        // @ts-expect-error attach raw payload for callers that need it
        err.raw = data;
        return Promise.reject(err);
      }

      // Optional: other statuses (403/404/409/5xx)
      // Swal.fire({ icon: 'error', title: `HTTP ${status}`, text: data?.message || 'Request failed' });
    } else if (error.request) {
      // No response (network/CORS/server down)
      const err = new Error('Network error or CORS issue. Please check your connection.');
      Swal.fire({ icon: 'error', title: 'Network Error', text: err.message });
      return Promise.reject(err);
    } else {
      // Something prevented axios from creating/sending the request (bad config, etc.)
      window.location.assign('/404');
    }

    return Promise.reject(error);
  }
);

export default axios;
