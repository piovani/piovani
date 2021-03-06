import Vue from 'vue'
import './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  iconfont: 'md',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
