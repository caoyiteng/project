import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Sub from './components/sub'
Vue.config.productionTip = false
Vue.component(Sub.name, Sub)
new Vue({
  // 全局都可以访问store里面的数据
  store,
  render: h => h(App)
}).$mount('#app')
