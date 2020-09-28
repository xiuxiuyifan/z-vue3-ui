import {createRouter, createWebHistory} from "vue-router";

const history = createWebHistory()

import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Tab from './views/TabDoc.vue'
import Switch from './views/SwitchDoc.vue'

const router = createRouter({
  history: history,
  linkActiveClass:'link-active',
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: 'tab', component: Tab},
        {path: 'switch', component: Switch}
      ]
    }
  ]
})

export {
  router
}
