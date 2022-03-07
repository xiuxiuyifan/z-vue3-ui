<template>
  <router-view/>
</template>

<script lang="ts">
import {ref,provide, getCurrentInstance} from 'vue'
import {menuStatus} from "./utils/utils";
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
      window.scrollTo(0, 0)
    })

  }
}
</script>

<style lang="scss">
@import "assets/scss/_var.scss";

#nprogress {
  .bar {
    background: $theme !important; //自定义颜色
  }

  .spinner-icon {
    border-color: $theme transparent transparent $theme;
  }
}
</style>
