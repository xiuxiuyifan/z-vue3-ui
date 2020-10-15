<template>
  <div class="top-nav">
    <div class="icon">
      <router-link class="icon" to="/">
        <svg aria-hidden="true">
          <use xlink:href="#icon-hehua1"></use>
        </svg>
      </router-link>
    </div>
    <ul class="menu-right-link">
      <li><a target="_blank" href="https://gitee.com/xiuxiuyifan/z-vue3-ui">码云</a></li>
      <li><a target="_blank" href="https://github.com/xiuxiuyifan/z-vue3-ui">github</a></li>
      <li>文档</li>
    </ul>
  </div>
  <div class="mobel-nav">
    <svg class="menu" v-if="!isHome" aria-hidden="true" @click="toggleMenu">
      <use xlink:href="#icon-weibiaoti302"></use>
    </svg>
    <svg class="vue" aria-hidden="true">
      <use xlink:href="#icon-hehua1"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import {inject, ref} from 'vue'
export default {
  name:'top-nav',
  setup(props,context) {
    const menuVisible = inject<ref<boolean>>('menuVisible')
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }
    return {
      toggleMenu,
    }
  },
  data(){
    return {
      isHome:false
    }
  },
  mounted() {
    this.isHome = this.checkPath()
  },
  methods: {
    checkPath(){
      let path = this.$route.path
      return path === '/' ? true : false
    }
  }
}
</script>

<style lang="less" scoped>
.top-nav{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 10px 60px;
  color: #69258d;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  z-index: 10;
  font-size: 16px;
  background: #fff;

  .icon {
    float: left;

    > svg {
      width: 40px;
      height: 40px;
    }
  }

  .menu-right-link {
    float: right;
    height: 40px;
    line-height: 40px;

    > li {
      display: inline-block;
      vertical-align: middle;
      margin-right: 50px;

      > a {
        color: rgb(105, 37, 141);
      }
    }
  }
}
.mobel-nav{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  z-index: 20;
  display: none;
  box-shadow: 0 0 2px rgba(0,0,0,0.25);
  .menu{
    color: #8f8f8f;
    position: absolute;
    width: 24px;
    height: 24px;
    top: 8px;
    left: 12px;
  }
  .vue{
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}

@media (max-width: 900px){
  .top-nav{
    display: none;
  }
  .mobel-nav{
    display: block;
  }
}
</style>
