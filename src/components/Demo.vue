<template>
  <div class="demo-container">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <!--展示代码的地方-->
    <div class="fold-code">
      <div class="demo-wrapper">
        <component :is="component"></component>
      </div>
      <code-per ref="codePer" :component="component"></code-per>
    </div>
  </div>
</template>

<script lang="ts">
import CodePer from "./CodePer.vue";

export default {
  name: 'demo',
  components: {CodePer},
  props: {
    title: {
      type: String,
      default: '组件功能'
    },
    description: {
      type: String,
      default: '组件功能描述'
    },
    component: {
      type: Object
    }
  }
}
</script>

<style lang="less" scoped>
.demo-container {
  //padding: 40px;
  h2 {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 22px;
    margin: 55px 0 20px;
  }

  p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
    margin: 14px 0;
  }

  .demo-wrapper {
    padding: 24px
  }

  .fold-code {
    //height: 0;
    overflow: hidden;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
  }
}
</style>
