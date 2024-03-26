import axios from "axios";


const UserApi = axios.create({
  baseURL: import.meta.env.VITE_APP_USER_API_BASE_URL,
});


const AdminApi=axios.create({
  baseURL:
  import.meta.env.VITE_APP_ADMIN_API_BASE_URL,

});


UserApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AdminApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


const Auth = axios.create({
  baseURL: import.meta.env.VITE_APP_AUTH_BASE_URL,
});

const cloudinary = axios.create({
  baseURL: import.meta.env.VITE_APP_CLOUDINARY_BASE_URL,
});

export {UserApi,AdminApi,Auth,cloudinary};
