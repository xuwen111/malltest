import axios from 'axios'

export function request(config){
  //1.创建axios实例
  const instance1 = axios.create({
    baseURL: '',
    timeout: 5000
  })
  //2.拦截请求以及响应
  //2.1请求拦截
  instance1.interceptors.request.use(config => {
    // console.log(config);
    return config
  }, err => {
    console.log(err)
    return err
  })
  //2.2响应拦截
  instance1.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  //3.发送真正的网络请求
  return instance1(config)
}
