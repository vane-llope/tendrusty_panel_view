import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/bootstrap-5.2.3/css/bootstrap.min.css"
import "./assets/bootstrap-5.2.3/js/bootstrap.bundle.min.js"
import "./assets/style/style.css"
import 'axios';
import 'vue3-select2-component';


createApp(App).use(store).use(router).mount('#app')
