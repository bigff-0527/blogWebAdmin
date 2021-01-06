import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";


import $ from 'jquery'
import SemanticUI from 'semantic-ui-css/semantic.js';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'semantic-ui-css/semantic.min.css';
import 'assets/css/me.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
