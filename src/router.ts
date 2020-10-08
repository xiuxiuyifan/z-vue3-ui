import {createRouter, createWebHistory , createWebHashHistory} from "vue-router";

const history = createWebHistory()
const hashRouter = createWebHashHistory()

import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Tab from './views/TabDoc.vue'
import Switch from './views/SwitchDoc.vue'
import Button from './views/ButtonDoc.vue'
import Introduce from './views/IntroduceDoc.vue'
import Fast from './views/FastDoc.vue'
import Use from './views/UseDoc.vue'
import Modal from './views/ModalDoc.vue'

const router = createRouter( {
  history: hashRouter,
  linkActiveClass:'link-active',
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: 'introduce', component: Introduce},
        {path: 'fast', component: Fast},
        {path: 'use', component: Use},
        {path: 'tab', component: Tab},
        {path: 'switch', component: Switch},
        {path: 'button', component: Button},
        {path: 'modal', component: Modal}
      ]
    }
  ]
})

export {
  router
}
