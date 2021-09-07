<template>
  <button class="z-switch" :class="{open:value}" @click="toggle"><span class="item"></span></button>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name:'z-switch',
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:value'],
  setup(props, context) {
    console.log(props)
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    return {
      toggle
    }
  }
})
</script>
<style lang="scss">
@import "../assets/scss/_var.scss";

.z-switch {
  min-width: 40px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 10px;
  border: 0;
  position: relative;
  background: #e3e3e3;
  margin:0;
  padding: 0;
  &:focus{
    outline: none;
  }
  &.open {
    background: $theme;

    .item {
      left: 100%;
      margin-left: -1px;
      transform: translateX(-100%);
    }
  }
  &:active{
    .item{
      width: 22px;
    }
  }
  .item{
    position: absolute;
    top: 2px;
    left: 1px;
    border-radius: 100%;
    transition: all .3s;
    width: 16px;
    height: 16px;
    background-color: #fdfdfd;
  }
}
</style>
