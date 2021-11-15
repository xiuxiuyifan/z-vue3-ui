import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/index.scss'
import {router} from "./router";
import 'github-markdown-css'
import { registerComponent } from './global/register';


const app = createApp(App)
registerComponent(app)
app.use(router)
app.mount('#app')
