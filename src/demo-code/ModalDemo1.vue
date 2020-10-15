<demo>
示例代码
</demo>
<template>
  <z-button size="mini" theme="primary" @click="showModalFunc">另一种方式打开</z-button>
</template>

<script lang="ts">
import {ref} from 'vue'
import ZButton from '../components/Button.vue';
import {openModal} from "../components/openModal";

export default {
  name: 'modal-demo1',
  components: {ZButton},
  setup() {
    const showModalFunc = () => {
      const visible = true
      let vm = openModal({
        visible,
        title: '标题',
        content: '对话框内容',
        ok: () => {
          console.log('ok');
          return false
        },
        cancel: () => {
          console.log('取消');
        }
      })

    }

    return {
      showModalFunc
    }
  }
};
</script>
