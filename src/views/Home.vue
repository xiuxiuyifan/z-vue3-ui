<template>
  <div class="home">
    <top-nav></top-nav>
    <div class="content">
      <h1>Vue UI框架</h1>
      <h2>用心创造，与君同行。</h2>
      <div class="btn">
        <a href="" class="git">GitHub</a>
        <router-link to="/doc/tab">开始</router-link>
      </div>
    </div>
    <div class="desc">
      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <div>
          <div class="title">基于Vue3</div>
          <div class="d-x">使用了Vue3 Composition API</div>
        </div>
      </div>
      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <div>
          <div class="title">基于Typescript</div>
          <div class="d-x">源代码采用Typescript书写（非常严格）</div>
        </div>
      </div>
      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tubiao06"></use>
        </svg>
        <div>
          <div class="title">代码易读</div>
          <div class="d-x">每个组件的源代码都极其简洁</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from '../components/TopNav.vue';
export default {
  name:'home',
  components: {TopNav},
}
</script>

<style lang="less" scoped>
@h1_color:#590089;
@bg:#6e02c3;
@btn_color:#fff;
@border_radius:4px;
.home{
  ::v-deep(.top-nav) {
    background: transparent;
  }
  .content{
    background: linear-gradient(145deg, #efe4ff 0%, #cebbe8 100%);
    margin: 0 auto;
    clip-path: ellipse(80% 60% at 50% 40%);
    padding: 200px 0 150px 0;
    >h1{
      text-align: center;
      font-size: 34px;
      line-height: 52px;
      color: @h1_color;
    }
    >h2{
      text-align: right;
      padding-right: 100px;
      font-size: 20px;
      line-height: 26px;
      color: @h1_color;
      margin-top: 12px;
    }
    .btn{
      text-align: center;
      margin-top: 16px;
      font-size: 17px;
      .git{
        margin-right: 15px;
      }
      >a{
        background: @bg;
        padding: 8px 20px;
        color: @btn_color;
        border-radius: @border_radius;
      }
    }
  }
  .desc{
    display: flex;
    padding-top: 70px;
    .item{
      flex: 1;
      display: flex;
      justify-content: center;
      >svg{
        width: 45px;
        height: 45px;
        margin-right: 15px;
      }
      .title{
        font-size: 28px;
        margin-bottom: 12px;
      }
      .d-x{
        font-size: 20px;
      }
    }
  }
}
@media screen and (max-width: 900px){
  .home{
    .content{
      padding: 100px 0 50px 0;
      >h2{
        padding-right: 0;
        text-align: center;
        margin-bottom: 15px;
      }
      .btn{
        display: block;
        text-align: center;
        margin: 0 auto;
        width: 300px;
        padding: 0 40px 30px;
        .git{
          margin-right: 0;
          margin-bottom: 15px;
        }
        >a{
          display: inline-block;
          min-width: 8em;
        }
      }
    }
    .desc{
      padding-bottom: 200px;
      flex-direction: column;
      .item{
        display: block;
        text-align: center;
        margin: 0 auto;
        width: 300px;
        padding: 0 40px 30px;
        .title{
          font-size: 20px;
        }
        .d-x{
          font-size: 14px;
          line-height: 20px;
        }
        >svg{
          margin-bottom: 10px;
          margin-right: 0;
        }
      }
    }
  }
}
</style>
