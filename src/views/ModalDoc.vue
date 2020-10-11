<template>
  <z-button size="mini" theme="primary" @click="showModal">打开对话框</z-button>
  <z-modal
      v-model:visible="visible"
      :ok="onOk"
      :cancel="onCancel"
  >
    <template v-slot:title>
      <span class="modal-title-doc">标题</span>
    </template>
    <template v-slot:content>
      <div class="content-doc">展示的内容</div>
    </template>
  </z-modal>

  <z-button size="mini" theme="primary" @click="showModalFunc">另一种方式打开</z-button>
</template>
<script lang="ts">
import {ref} from 'vue'
import ZButton from '../components/Button.vue';
import ZModal from '../components/Modal.vue';
import {openModal} from "../components/openModal";

export default {
  components: {ZButton, ZModal},
  setup() {

    const visible = ref<boolean>(false)

    const showModal = () => {
      visible.value = true
    }

    const onOk = () => {
    }

    const onCancel = () => {
    }

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
      showModal,
      visible,
      onOk,
      onCancel,
      showModalFunc
    }
  }
};
</script>

<style lang="less" scoped>
.content-doc, .modal-title-doc {
  font-size: 14px;
}
</style>
