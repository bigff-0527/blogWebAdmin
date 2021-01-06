import Axios from 'axios';
import ElementUI from 'element-ui'
import store from "../store";
import router from "../router";
export function request(config) {
  const instance= Axios.create({
    baseURL: 'http://127.0.0.1:8888/admin',
    timeout: 5000,
    headers:{"Content-Type":"application/json"},
  })

  //前置拦截
  instance.interceptors.request.use( config => {

    return config
  },err => {

  })

  //请求数据后拦截
  instance.interceptors.response.use(response => {

    let res = response.data;

    if (res.code==200 || res.code==300){
      return response
    }else{
      ElementUI.Message.error(response.data.msg,{duration: 3*1000})
      return Promise.reject(response.data.msg)
    }
  //处理后端异常
  }, error => {
    if (error.response.data){
      error.message = error.response.data
    }
    if (error.response.data.code === 401){
      store.commit("REMOVE_INFO")
      router.push("/login")
    }

    ElementUI.Message.error(error.message.msg, {duration: 3 * 1000})
    return Promise.reject(error.message.msg)
  })
  //发送请求 promise
  return instance(config)
}
