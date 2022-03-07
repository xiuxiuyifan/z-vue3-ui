<template>
  <demo-doc title="基本用法" description="展示结构类似的数据。" :component="TableDemo"></demo-doc>
  <demo-doc title="边框表格" description="表格周围带上边框" :component="TableDemo1"></demo-doc>
</template>

<script lang="ts">
import ZTable from "../components/table/index.vue";
import DemoDoc from "../components/DemoDoc.vue";
import TableDemo from '../demo-code/TableDemo.vue'
import TableDemo1 from '../demo-code/TableDemo1.vue'

export default {
  components: {DemoDoc, ZTable},
  setup() {
    return {
      TableDemo,
      TableDemo1
    }
  }
}
</script>


