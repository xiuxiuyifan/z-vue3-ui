<template>
<div class="z-tab">
  <div class="z-tab-header">
    <div class="z-tab-header-title" :class="{'tab-active':activeKey===keys[index]}" v-for="(item,index) in titles" :key="item" @click="change(keys[index])">{{item}}</div>
  </div>
  <div class="z-tab-content">
    <component :is="current" :key="current.props.key"></component>
  </div>
</div>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
  name: 'z-tab',
  props:{
    activeKey:{
      type:String
    }
  },
  setup(props,context) {
    let titles = []
    let keys = []
    let contents = []
    let defaultSlots = context.slots.default()
    defaultSlots.map((item,index)=>{
      titles.push(item.props.title)
      keys.push(item.props.key)
      contents.push(item)
    })

    //找到当前选中的内容slot
    const current = computed(()=>{
      return  defaultSlots.find(tag => tag.props.key === props.activeKey)
    })

    const change = (activeKey) => {
      context.emit('update:activeKey',activeKey)
    }

    return {
      titles,
      keys,
      contents,
      current,
      change
    }
  }
}

</script>

<style lang="less">
.z-tab{
  .z-tab-header{
    color: #393e46;
    .z-tab-header-title{
      display: inline-block;
      padding: 12px 16px;
      cursor: pointer;
    }
    .tab-active{
      color: #00adb5;
    }
  }

}
</style>
