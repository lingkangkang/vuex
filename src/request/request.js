import axios from 'axios';
import QS from 'qs'; /*qs 是一个增加了一些安全性的查询字符串解析和序列化字符串的库*/
import store from '../store/index';

//自动切换环境
// if (process.env.NODE_ENV == 'development'){
//   axios.defaults.baseURL = '/api';
// } else if (process.env.NODE_ENV == 'debug'){
//   axios.defaults.baseURL = '/api';
// } else if (process.env.NODE_ENV == 'production') {
//   axios.defaults.baseURL = 'http://***********/';
// }
//axios.defaults.baseURL = process.env.API_ROOT
//设置超时时间
axios.defaults.timeout = 10000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//对外接口
export function request({method, url, params,type}){
  store.dispatch("changeLogin",true)
  switch (type){
     case "yy":
       axios.defaults.baseURL = '/api1'
       break;
     case "tq":
       axios.defaults.baseURL = '/api'
       break;
     default:
       break;
   }

  if(method == 'Get'){
    return get(url, params);
  }else if(method == 'Post'){
    return post(url, params);
  }
}
// 封装get方法
function get(url, params){
  return new Promise((resolve, reject) =>{
    axios.get(url, {params:params}).then(res =>{
      setTimeout(function () {
        store.dispatch("changeLogin",false)
      },600)
      resolve(res.data);
    }).catch(err =>{
      setTimeout(function () {
        store.dispatch("changeLogin",false)
      },600)
      reject(err.data);
    })
  });

}

// 封装post方法
function post(url, params){
  return new Promise((resolve, reject) =>{
    axios.post(url, QS.stringify(params)).then(res =>{
      resolve(res.data);
      setTimeout(function () {
        store.dispatch("changeLogin",false)
      },600)
    }).catch(err =>{
      reject(err.data);
      setTimeout(function () {
        store.dispatch("changeLogin",false)
      },600)  })

  });
}

//请求拦截(请求发出前处理请求)
// axios.interceptors.request.use(
//   confirm => {
//     //将token放入header，这里用Vuex把token放在store中，取出
//     const token = store.state.token;
//     token && (config.headers.Authorization = token);
//     return config;
//   },
//   error =>{
//     return Promise.error(error);
//   }
//
// )

//响应拦截器（处理响应数据）
axios.interceptors.response.use(
  response => {
    if(response.status === 200){
      return Promise.resolve(response);
    }else{
      //这个地方可以由后台编辑状态码区分不同情况，做不同的逻辑处理
      return Promise.reject(response);
    }
  },
  error => {

    return Promise.reject(error.response);

  }
)
