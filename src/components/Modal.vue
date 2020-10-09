<template>
  <div class="z-modal" v-if="visible">
    <div class="z-modal-wrapper">
      <div class="z-modal-header">{{ title }}</div>
      <div class="z-modal-content">
        <slot/>
      </div>
      <div class="z-modal-footer"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'z-modal',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    console.log(props);
  }
}
</script>


<style lang="less">
@zIndex: 2007;
.z-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  background: rgba(0, 0, 0, 0.5);
  z-index: @zIndex;
}
</style>
