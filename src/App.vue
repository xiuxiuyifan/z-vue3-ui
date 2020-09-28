<template>
  <router-view/>
</template>

<script lang="ts">
import {ref,provide} from 'vue'
import {menuStatus} from "./utils/utils.ts";
export default {
  name: 'App',
  setup() {
    const menuVisible = ref(menuStatus())
    provide('menuVisible',menuVisible)
  }
}
</script>
