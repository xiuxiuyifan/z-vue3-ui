<template>
  <div>
    <h2>switch组件文档</h2>
    <div class="show-content">
      <z-switch v-model:value="check" @update:value="check = $event"></z-switch>
    </div>
    <code-per path="../demo-code/Switch.vue"></code-per>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue'
import ZSwitch from "../components/Switch.vue";
import CodePer from "../components/CodePer.vue";

export default {
  components: {CodePer, ZSwitch},
  setup() {
    const check = ref<boolean>(true)
    return {
      check
    }
  }
}
</script>

<style lang="less" scoped>
.show-content{
  padding: 40px 20px;
}
</style>
