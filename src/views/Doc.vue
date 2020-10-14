<template>
  <div class="doc">
    <top-nav></top-nav>
    <div class="menu-wrapper" :class="{'open':menuVisible}">
      <div class="menu">
        <h2>文档</h2>
        <ul class="ul">
          <li class="item-li">
            <router-link class="link-a" to="/doc/introduce">介绍</router-link>
          </li>
          <li class="item-li">
            <router-link class="link-a" to="/doc/fast">快速上手</router-link>
          </li>
          <li class="item-li">
            <router-link class="link-a" to="/doc/use">使用</router-link>
          </li>
        </ul>
        <h2>组件</h2>
        <ul class="ul">
          <li class="item-li">
            <router-link class="link-a" to="/doc/switch">switch组件</router-link>
          </li>
          <li class="item-li">
            <router-link class="link-a" to="/doc/button">button组件</router-link>
          </li>
          <li class="item-li">
            <router-link class="link-a" to="/doc/tab">tab组件</router-link>
          </li>
          <li class="item-li">
            <router-link class="link-a" to="/doc/modal">modal组件</router-link>
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
  ::v-deep(.top-nav,.mobel-nav) {
    box-shadow: 0 2px 8px #f0f1f2;
  }
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
      padding-top: 10px;
      h2{
        line-height: 22px;
        padding: 10px;
        font-size: 16px;
        color: #333;
        font-weight: 700;
      }
      .ul{
        .item-li{
          .link-a{
            display: inline-block;
            padding: 13px 0;
            width: 100%;
            padding-left: 20px;
            position: relative;
            color: #444;
            font-size: 14px;
          }
          .link-active{
            background: linear-gradient(145deg, rgb(239, 228, 255) 0%, rgb(206, 187, 232) 100%);
            &:after{
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              height: 100%;
              border-right: 3px solid  rgb(110, 2, 195);
            }
          }
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
    .router-view-wrapper{
      padding: 70px 20px;
    }
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
