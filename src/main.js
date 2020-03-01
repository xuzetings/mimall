import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'
// import env from './env'
const mock=true;//mockJS开关
if(mock){
  require('./mock/api')
}




axios.defaults.baseURL='/api';
axios.defaults.timeout=8000;//超时拦截
// axios.defaults.baseURL=env.baseURL

//接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){//状态码0代表成功
    return res.data;
  }else if(res.status == 10){//状态码10代表失败
    window.location.href = '/#/login';
  }else{
    alert(res.msg);
  }
})


Vue.use(VueAxios,axios)
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
