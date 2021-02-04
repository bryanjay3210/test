import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import VueRouter from 'vue-router'
import routes from './routes/routes.js'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(VueRouter)
Vue.config.productionTip = false

var router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App),
})
