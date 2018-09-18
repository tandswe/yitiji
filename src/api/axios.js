import axios from 'axios'

const defaultAxios = axios.create({
  baseURL: 'http://10.9.153.194:8080',
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  transformRequest: [data => JSON.stringify(data)]
})

// 添加请求拦截器
defaultAxios.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    return config
  }, error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  })

// 添加响应拦截器
defaultAxios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response
  }, error => {
    // 对响应错误做点什么
    if (error.status >= 500) {
      console.error('出错了')
    }
    return Promise.reject(error)
  })

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
               reject(error)
            })
    })
}
export default defaultAxios
