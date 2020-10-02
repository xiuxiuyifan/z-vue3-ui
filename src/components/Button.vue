<template>
  <button class="z-button">
    <slot/>
  </button>
</template>

<script lang="ts">
export default {
  name:'z-button',
  props:{
    //按钮主题
    theme:{
      type:String,
      default:'primary'
    },
    size:{
      type:String,
      default:'normal'
    },
    loading:{
      type:Boolean,
      default:false
    },

  }
}
</script>

<style lang="less">
.z-button{

}
</style>
