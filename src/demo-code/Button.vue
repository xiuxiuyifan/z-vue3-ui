<demo>
常规使用
</demo>
<template>
  <z-button class="b-m b-b">默认按钮</z-button>
  <z-button theme="primary" class="b-m b-b">主要按钮</z-button>
  <z-button theme="success" class="b-m b-b">成功按钮</z-button>
  <z-button theme="warning" class="b-m b-b">警告按钮</z-button>
  <z-button theme="info" class="b-m b-b">信息按钮</z-button>
  <z-button theme="danger" class="b-m">危险按钮</z-button>
  <z-button theme="text" class="b-m">文字按钮</z-button>
</template>


<script lang="ts">
import ZButton from "../components/Button.vue";

export default {
  components: {ZButton}
}
</script>
