<demo>
示例代码
</demo>
<template>
  <div>
    <z-button class="b-m b-b">默认按钮</z-button>
    <z-button theme="primary" class="b-m b-b">主要按钮</z-button>
    <z-button theme="success" class="b-m b-b">成功按钮</z-button>
    <z-button theme="warning" class="b-m b-b">警告按钮</z-button>
    <z-button theme="info" class="b-m b-b">信息按钮</z-button>
    <z-button theme="danger" class="b-m">危险按钮</z-button>
    <z-button theme="text" class="b-m">文字按钮</z-button>
  </div>
</template>


<script lang="ts">
import ZButton from "../components/Button.vue";

export default {
  name: 'button-demo',
  components: {ZButton},
}
</script>

<style lang="less" scoped>
.b-m {
  margin-right: 15px
}

.b-b {
  margin-bottom: 15px;
}
</style>
