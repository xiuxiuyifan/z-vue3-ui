<template>
  <div>
    <h2>switch组件文档</h2>
    <div class="show-content">
      <z-switch :value="check" @update:value="check = $event"></z-switch>
    </div>

    <switch-demo></switch-demo>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue'
import ZSwitch from "../components/Switch.vue";
import SwitchDemo from "../demo/SwitchDemo.vue";

export default {
  components: {SwitchDemo, ZSwitch},
  setup(){
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
