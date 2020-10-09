<template>
  <z-button size="mini" theme="primary" @click="showModal">打开对话框</z-button>
  <z-modal v-model:visible="visible"></z-modal>
</template>
<script lang="ts">
import {ref} from 'vue'
import ZButton from '../components/Button.vue';
import ZModal from '../components/Modal.vue';

export default {
  components: {ZButton, ZModal},
  setup() {

    const visible = ref<boolean>(false)

    const showModal = () => {
      visible.value = true
    }
    return {
      showModal,
      visible
    }
  }
};
</script>
