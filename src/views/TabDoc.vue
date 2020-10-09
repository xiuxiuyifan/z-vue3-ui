<template>
  <div>tab组件文档</div>
  <z-tab v-model:active-key="activeKey">
    <z-tab-item class="tab-item-doc" key="1" title="学习">学习</z-tab-item>
    <z-tab-item class="tab-item-doc" key="2" title="放映厅">放映厅</z-tab-item>
    <z-tab-item class="tab-item-doc" key="3" title="单机游戏">单机游戏</z-tab-item>
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

<style lang="less" scoped>
.tab-item-doc {
  padding: 10px 20px;
  font-size: 14px;
}
</style>
