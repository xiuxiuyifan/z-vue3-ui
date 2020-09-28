<template>
  <div class="doc">
    <top-nav></top-nav>
    <div class="menu-wrapper" :class="{'open':menuVisible}">
      <div class="menu">
        <ul class="ul">
          <li class="item-li">
            <router-link to="/doc/tab">tab组件</router-link>
          </li>
          <li class="item-li">
            <router-link to="/doc/switch">switch组件</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="router-view-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import {inject,ref} from 'vue'
import TopNav from '../components/TopNav.vue';
export default {
  name:'view-doc',
  components: {TopNav},
  setup() {
    const menuVisible = inject<ref<boolean>>('menuVisible')
    return {
      menuVisible
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.doc{
  .router-view-wrapper{
      padding-top: 70px;
      position: relative;
      max-width: 700px;
      margin: 0 auto;
      padding-bottom: 2000px;
  }
  .menu-wrapper{
    width: 260px;
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    top: 60px;
    left: 0;
    bottom: 0;
    border-right: 1px solid #e8e8e8;
    .menu{
      padding: 0px 10px 30px 20px;
      .ul{
        .item-li{
          .link-active{
            color: #69258d;
          }
          padding: 10px 0;
        }
      }
    }
  }
}
@media (max-width: 1300px) {
  .doc{
    .router-view-wrapper{
      margin-left: 290px;
    }
  }
}
@media (max-width: 900px){
  .doc{
    .menu-wrapper{
      width: 260px;
      position: fixed;
      overflow-x: hidden;
      overflow-y: auto;
      top: 40px;
      left: 0;
      bottom: 0;
      z-index: 1;
      background-color: #f9f9f9;
      transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
      transform: translateX(-280px);
      border-right: 0;
    }
    .open{
      transform: translateX(0px);
    }
    .router-view-wrapper{
      margin: auto;
    }
  }
}
</style>
