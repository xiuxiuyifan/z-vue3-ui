<template>
  <button class="z-button" :class="{open:value}" @click="toggle"><span class="item"></span></button>
</template>

<script lang="ts">
import {ref} from 'vue'
export default {
  name:'z-switch',
  setup() {
    //ref 表示基本类型也需要响应式
    const value = ref<boolean>(false)
    const toggle = ()=>{
      value.value = !value.value
    }
    return {
      value,
      toggle
    }
  }
}
</script>
<style lang="less" scoped>
@import "../assets/less/_var.less";
.z-button{
  min-width: 40px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
  border: 0;
  position: relative;
  background: #e3e3e3;
  margin:0;
  padding: 0;
  &.open{
    background: @theme;
    .item{
      left: calc(100% - 17px);
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
