import { createApp } from 'vue'
import App from './App.vue'
import './assets/less/index.less'
import {router} from "./router";
import 'github-markdown-css'


const app =  createApp(App)
app.use(router)
app.mount('#app')
