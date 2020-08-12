import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';

// default config
Object.assign(axios.defaults, {
    // baseURL: '',
    // timeout: 10000,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    withCredentials: true
});
/**
 * 请求拦截器处理
 */
axios.interceptors.request.use(
    req => {
      if(req.method === 'post') {
        req.data = qs.stringify(req.data);
      }
      return req;
    },
    err => {
      return Promise.reject(err);
    }
);

/**
 * 服务端响应拦截器：(该项目服务处理code只有0和1)
 * 用于处理全局错误
 * 非全局错误则 resolve，全局错误则 reject
 */
axios.interceptors.response.use(
  res => {
    let data = res.data;
    data.code!==0 && data.msg!=='未登录'&& Vue.prototype.$message.error(data.msg)
    // data.code!==0 && Vue.prototype.$message.error(data.msg)
    return data
  },
  err => {
    let code = err.response && err.response.status
    // 判断接口响应
    let isGlobalErr = [ 400, 404, 413, 500, 502].indexOf(code) > -1
    isGlobalErr && Vue.prototype.$message.error('网络错误，请稍后再试')
    return Promise.reject(err);
  }
);

Vue.use({
    install(Vue) {
      Vue.$axios = Vue.prototype.$axios = axios;
    }
});