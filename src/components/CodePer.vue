<template>
  <pre ref="codePer" class="language-html" v-html="html"></pre>
</template>

<script lang="ts">
import 'prismjs/'
import {ref} from 'vue'
import 'prismjs/themes/prism.css'

const Prism = (window as any).Prism

export default {
  name: 'code-per',
  props: {
    component: {
      type: Object
    }
  },
  setup(props, context) {

    return {}
  },
  data() {
    return {
      html: '',
      height: 0
    }
  },
  mounted() {
    //由于打包后不支持
    //换成传入组件的形式
    this.html = Prism.highlight(this.component.__sourceCode, Prism.languages.javascript, 'javascript')
    this.$nextTick(() => {
      const codePer = this.$refs.codePer
      let {height} = codePer.getBoundingClientRect()
      this.height = height
    })
  }
}
</script>

<style lang="less" scoped>
pre {
  margin: 0;
}
</style>
