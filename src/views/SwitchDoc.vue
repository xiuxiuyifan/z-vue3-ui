<template>
  <div>
    <h2>switch组件文档</h2>
    <div class="show-content">
      <z-switch></z-switch>
    </div>
  </div>
</template>

<script lang="ts">
import ZSwitch from "../components/Switch.vue";

export default {
  components: {ZSwitch}
}
</script>

<style lang="less" scoped>
.show-content{
  padding: 40px 20px;
}
</style>
