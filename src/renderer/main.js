import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
// import 'bootstrap/dist/css/bootstrap.css'

// iView
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'

// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(iView)
Vue.use(ElementUI)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
