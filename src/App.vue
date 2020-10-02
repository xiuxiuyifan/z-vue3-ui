<template>
  <router-view/>
</template>

<script lang="ts">
import {ref,provide} from 'vue'
import {menuStatus} from "./utils/utils.ts";
import {router} from "./router";

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default {
  name: 'App',
  setup() {
    const menuVisible = ref(menuStatus())
    const width = document.documentElement.clientWidth
    provide('menuVisible',menuVisible)

    router.beforeEach((to, from, next) => {
      NProgress.start()
      next()
    })

    router.afterEach(() => {
      if(width<=900){
        menuVisible.value = false
      }
      NProgress.done()
    })
  }
}
</script>

<style lang="less">
@import "./assets/less/_var";
#nprogress{
  .bar {
    background: @theme !important; //自定义颜色
  }
  .spinner-icon{
    border-color: @theme transparent transparent @theme;
  }
}
</style>
