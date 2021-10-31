import Vue from 'vue';
import App from './App.vue';

// 导入路由
import router from "./router";

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

// import eventBus from "./eventBus";

// window.eventBus = eventBus;
// function handle1() {
//   console.log('event1被触发了');
// }

// function handle2() {
//   console.log('event2被触发了');
// }

// window.handle1 = handle1;
// window.handle2 = handle2;
// eventBus.$on('event1', handle1)

// eventBus.$on('event2', handle2)