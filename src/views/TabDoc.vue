<template>
  <div>tab组件文档</div>
  <z-tab v-model:active-key="activeKey">
    <z-tab-item key="1" title="tab1">第一个</z-tab-item>
    <z-tab-item key="2" title="tab2">第二个</z-tab-item>
    <z-tab-item key="3" title="tab3">第三个</z-tab-item>
  </z-tab>
</template>
<script lang="ts">
import { ref } from 'vue'
import ZTab from '../components/tab/Tab.vue';
import ZTabItem from '../components/tab/TabItem.vue';
export default {
  components: {ZTabItem, ZTab},
  setup() {
    const activeKey = ref<string>('2')
    return {
      activeKey
    }
  }
};
</script>
