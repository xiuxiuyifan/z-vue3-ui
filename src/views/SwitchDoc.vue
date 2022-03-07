<template>
  <div class="container">
    <demo-doc title="基本用法" description="开关按钮的基本用法" :component="SwitchDemo"></demo-doc>
    <attr :columns="columns" :data="data"></attr>
  </div>
</template>

<script lang="ts">
import SwitchDemo from "../demo-code/SwitchDemo.vue";
import DemoDoc from "../components/DemoDoc.vue";
import {columns} from "../lib/data";
import Attr from "../components/Attr.vue";

export default {
  components: {Attr, DemoDoc},
  setup() {
    const data = [
      {
        params: 'value',
        desc: '是否选中',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      }
    ]
    return {
      SwitchDemo,
      columns,
      data
    }
  }
}
</script>
