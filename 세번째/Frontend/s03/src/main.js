import Vue from 'vue'
import App from './App.vue'
import routes from './routes'
import VueRouter from 'vue-router'
import VueSession from 'vue-session'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueGeolocation from 'vue-browser-geolocation';
Vue.use(VueGeolocation);
import store from './store'
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueSession)
const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')