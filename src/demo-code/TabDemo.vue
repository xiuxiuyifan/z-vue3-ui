<template>
  <z-tab v-model:active-key="activeKey">
    <z-tab-item class="tab-item-doc" key="1" title="学习">学习</z-tab-item>
    <z-tab-item class="tab-item-doc" key="2" title="放映厅">放映厅</z-tab-item>
    <z-tab-item class="tab-item-doc" key="3" title="单机游戏">单机游戏</z-tab-item>
  </z-tab>
</template>
<script lang="ts">
import {ref} from 'vue'
import ZTab from '../components/tab/Tab.vue';
import ZTabItem from '../components/tab/TabItem.vue';

export default {
  components: {ZTabItem, ZTab},
  setup() {
    const activeKey = ref('2')
    return {
      activeKey
    }
  }
};
</script>
<style lang="scss">
.tab-item-doc {
  padding: 20px 12px;
}
</style>
