<demo>
示例代码
</demo>
<template>
  <div>
    <z-button class="b-m b-b">默认大小</z-button>
    <z-button class="b-m b-b" size="small">中等按钮</z-button>
    <z-button class="b-m b-b" size="mini">超小按钮</z-button>
  </div>
</template>

<script lang="ts">
import ZButton from "../components/Button.vue";

export default {
  name: 'button-demo-1',
  components: {ZButton}
}
</script>

<style lang="less" scoped>
.b-m {
  margin-right: 15px;
}

.b-b {
  margin-bottom: 15px;
}
</style>
