<template>
<div class="container">
  <demo-doc title="基础用法" description="button的基础用法" :component="ButtonDemo"></demo-doc>
  <demo-doc title="不同尺寸" description="提供三种不同尺寸的按钮" :component="ButtonDemo1"></demo-doc>
  <demo-doc title="加载中" description="点击按钮进行数据加载操作，在按钮上面显示加载状态" :component="ButtonDemo2"></demo-doc>

  <attr :columns="columns" :data="data"></attr>
</div>
</template>

<script lang="ts">
import ZButton from "../components/Button.vue";
import CodePer from "../components/CodePer.vue";
import ButtonDemo from "../demo-code/ButtonDemo.vue";
import ButtonDemo1 from "../demo-code/Button1Demo.vue";
import ButtonDemo2 from "../demo-code/Button2Demo.vue";
import DemoDoc from "../components/DemoDoc.vue";
import Attr from "../components/Attr.vue";
import {columns} from "../lib/data";

export default {
  components: {Attr, DemoDoc, ZButton},
  setup(props, context) {
    const data = [
      {
        params: 'size',
        desc: '尺寸',
        type: 'string',
        select: 'normal / small / mini',
        default: 'normal',
      },
      {
        params: 'theme',
        desc: '按钮类型',
        type: 'string',
        select: 'primary / success / warning / info / danger / text',
        default: 'primary',
      },
      {
        params: 'loading',
        desc: '加载中',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      }
    ]
    return {
      ButtonDemo,
      ButtonDemo1,
      ButtonDemo2,
      columns,
      data
    }
  },
}
</script>
<style lang="scss" scoped>
.container {

}
</style>
