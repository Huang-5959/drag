import axios, {type  AxiosRequestConfig, type AxiosResponse} from 'axios';

const service = axios.create({
  baseURL: ''
});

service.interceptors.request.use(
  (config) => {
    const changeConfig = config;
    let token = sessionStorage.getItem('token')
    if(token) {
      changeConfig.headers['Authorization'] = token
    }
    return changeConfig;
  },
  (error) => Promise.reject(error),
);


// service.interceptors.response.use(
//   (res) => {
//     return res.data
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

async function request<T>(config: AxiosRequestConfig) {
  let response = await service<response<T>>(config)
  return response.data
}

export default request;
