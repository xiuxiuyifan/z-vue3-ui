<template>
<div class="container">
  <h2>基础用法</h2>
  <p>button的基础用法</p>
  <z-button class="b-m b-b">默认按钮</z-button>
  <z-button theme="primary" class="b-m b-b">主要按钮</z-button>
  <z-button theme="success" class="b-m b-b">成功按钮</z-button>
  <z-button theme="warning" class="b-m b-b">警告按钮</z-button>
  <z-button theme="info" class="b-m b-b">信息按钮</z-button>
  <z-button theme="danger" class="b-m">危险按钮</z-button>
  <z-button theme="text" class="b-m">文字按钮</z-button>
  <!--展示代码的地方-->

  <h2>不同尺寸</h2>
  <p>提供三种不同尺寸的按钮</p>
  <z-button class="b-m">默认大小</z-button>
  <z-button class="b-m" size="small">中等按钮</z-button>
  <z-button class="b-m" size="mini">超小按钮</z-button>

  <!--展示代码的地方-->

  <h2>加载中</h2>
  <p>点击按钮进行数据加载操作，在按钮上面显示加载状态</p>
  <z-button loading>加载中</z-button>

  <!--展示代码的地方-->


  <!--组件参数展示-->

  
</div>
</template>

<script lang="ts">
import ZButton from "../components/Button.vue";
export default {
  components: {ZButton}
}
</script>
<style lang="less" scoped>
.container{
  h2{
    font-weight: 400;
    color: #1f2f3d;
    font-size: 22px;
    margin: 55px 0 20px;
  }
  p{
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
    margin: 14px 0;
  }
  padding: 40px;
  .b-m{
    margin-right: 15px
  }
  .b-b{
    margin-bottom: 15px;
  }
}
</style>
