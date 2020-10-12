<template>
  <div class="container">
    <demo title="基本用法" description=开关按钮的基本用法" :component="SwitchDemo"></demo>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue'
import ZSwitch from "../components/Switch.vue";
import CodePer from "../components/CodePer.vue";
import Demo from "../components/Demo.vue";
import SwitchDemo from "../demo-code/Switch.vue";

export default {
  components: {Demo, CodePer, ZSwitch},
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
