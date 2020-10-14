<template>
<div class="container">
  <demo-doc title="基础用法" description="button的基础用法" :component="ButtonDemo"></demo-doc>
  <demo-doc title="不同尺寸" description="提供三种不同尺寸的按钮" :component="ButtonDemo1"></demo-doc>
  <demo-doc title="加载中" description="点击按钮进行数据加载操作，在按钮上面显示加载状态" :component="ButtonDemo2"></demo-doc>
</div>
</template>

<script lang="ts">
import {onMounted, nextTick} from 'vue'
import ZButton from "../components/Button.vue";
import CodePer from "../components/CodePer.vue";
import ButtonDemo from "../demo-code/Button.vue";
import ButtonDemo1 from "../demo-code/Button1.vue";
import ButtonDemo2 from "../demo-code/Button2.vue";
import DemoDoc from "../components/Demo.vue";

export default {
  components: {DemoDoc, ZButton},
  setup(props, context) {
    return {
      ButtonDemo,
      ButtonDemo1,
      ButtonDemo2,
    }
  },
  mounted() {

  }
}
</script>
<style lang="less" scoped>
.container{

}
</style>
