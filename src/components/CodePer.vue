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
    path: {
      type: String
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
    import(this.path)
        .then((res) => {
          this.html = Prism.highlight(res.default.__sourceCode, Prism.languages.javascript, 'javascript')
          this.$nextTick(() => {
            console.log('hi');
            const codePer = this.$refs.codePer
            let {height} = codePer.getBoundingClientRect()
            this.height = height
            console.log(height);
          })
        })
        .catch((err) => {
          console.log(err);
        })
  }
}
</script>

<style lang="less" scoped>
pre {
  margin: 0;
}
</style>
