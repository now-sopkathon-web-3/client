import axios from 'axios';

const createInterceptor = () => {
  const baseInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
  });
  baseInstance.defaults.withCredentials = true;

  return baseInstance;
};

const Axios = createInterceptor();

export default Axios;
