<template>
  <div class="container">
    <demo-doc title="tab切换" description="内容有关联的不同类型的数据" :component="TabDemo"></demo-doc>
    <attr :columns="columns" :data="data"></attr>
  </div>
</template>

<script lang="ts">
import DemoDoc from '../components/DemoDoc.vue';
import TabDemo from '../demo-code/TabDemo.vue';
import {columns} from '../lib/data.ts';
import Attr from '../components/Attr.vue';

export default {
  components: {Attr, DemoDoc},
  setup() {
    const data = [
      {
        params: 'z-tab-item',
        desc: 'tab页签',
        type: 'component',
        select: 'z-tab-item',
        default: '--',
      },
    ];

    return {
      TabDemo,
      columns,
      data,
    };
  },
};
</script>

<style lang="scss" scoped>
.show-content {
  padding: 40px 20px;
}
</style>
