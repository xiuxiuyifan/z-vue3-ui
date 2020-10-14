<template>
  <div class="container">
    <demo-doc title="基本用法" description="开关按钮的基本用法" :component="SwitchDemo"></demo-doc>
  </div>
</template>

<script lang="ts">
import SwitchDemo from "../demo-code/Switch.vue";
import DemoDoc from "../components/Demo.vue";

export default {
  components: {DemoDoc},
  setup() {
    return {
      SwitchDemo
    }
  }
}
</script>

<style lang="less" scoped>
.show-content{
  padding: 40px 20px;
}
</style>
