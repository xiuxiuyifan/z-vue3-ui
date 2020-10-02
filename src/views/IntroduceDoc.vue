<template>
  <article class="markdown-body" v-html="content">

  </article>
</template>

<script lang="ts">
import {ref} from 'vue'
export default {
  setup() {
    const content = ref<string>('')
    import('../markdowm/introduce.md')
    .then((res)=>{
      content.value = res.default
    })
    .catch((err)=>{
      console.log(err);})

    return {
      content
    }
  }
}
</script>
