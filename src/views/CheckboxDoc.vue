<template>
  <DemoDoc title="基础用法" description="单独使用的 Checkbox" :component="CheckboxDemoVue"></DemoDoc>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import DemoDoc from '../components/DemoDoc.vue';
import CheckboxDemoVue from '../demo-code/CheckboxDemo.vue';
export default defineComponent({
  components: {
    DemoDoc
  },
  setup() {
    return {
      CheckboxDemoVue
    }
  }
})
</script>
