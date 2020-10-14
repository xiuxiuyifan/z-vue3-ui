<demo>
示例代码
</demo>
<template>
  <div>
    <z-button class="b-m">默认大小</z-button>
    <z-button class="b-m" size="small">中等按钮</z-button>
    <z-button class="b-m" size="mini">超小按钮</z-button>
  </div>
</template>

<script lang="ts">
import ZButton from "../components/Button.vue";

export default {
  name: 'button-demo-1',
  components: {ZButton}
}
</script>
