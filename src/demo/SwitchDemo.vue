<template>
  <pre  class="language-html" v-html="html"></pre>
</template>

<script lang="ts">
import 'prismjs/'
import {ref} from 'vue'
import 'prismjs/themes/prism.css'

const Prism = (window as any).Prism

export default {
  name: 'switch-demo',
  setup(){
    const html = ref<string>('')
    import('./1.vue')
    .then((res)=>{
      console.log(res);
      html.value =  Prism.highlight(res.default.__sourceCode, Prism.languages.javascript, 'javascript')
    })
    .catch((err)=>{
      console.log(err);})
    return {
      html
    }
  }
}
</script>
