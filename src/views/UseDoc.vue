<template>
  <article class="article-wrapper markdown-body" v-html="content">
  </article>
</template>

<script lang="ts">
import {ref} from 'vue'

export default {
  setup() {
    const content = ref<string>('')
    import('../markdowm/use.md')
        .then((res) => {
          content.value = res.default
        })
        .catch((err) => {
          console.log(err);
        })

    return {
      content
    }
  }
}
</script>

<style lang="less" scoped>
.article-wrapper {
  padding: 40px 0;
}
</style>
