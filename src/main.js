import Vue from 'vue';
import App from './App.vue';
import router from "./router/index";
import "./mock";
import showMessage from './utils/showMessage';

// 提示消息函数
Vue.prototype.$showMessage = showMessage;

//注册加载的全局指令
import vLoading from "@/directives/loading";
Vue.directive('loading', vLoading)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


// just test
import * as blogApi from "./api/blog";
blogApi.getBlogs(10, 30, '分类1').then(p => {
  console.log(p);
});

blogApi.getBlogtype().then(p => {
  console.log(p);
})