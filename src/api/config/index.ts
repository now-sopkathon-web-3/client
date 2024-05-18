import axios from 'axios';

const createInterceptor = () => {
  const baseInstance = axios.create({
    baseURL: 'https://api.34sktweb3.o-r.kr',
  });
  baseInstance.defaults.withCredentials = true;

  return baseInstance;
};

const Axios = createInterceptor();

export default Axios;
