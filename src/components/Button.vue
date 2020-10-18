<template>
  <button class="z-button" :class="classes">
    <span v-if="loading" class="z-button-spin"><svg class="menu" aria-hidden="true" @click="toggleMenu">
      <use xlink:href="#icon-jiazaizhong"></use>
    </svg></span>
    <span><slot/></span>
  </button>
</template>

<script lang="ts">
export default {
  name:'z-button',
  props:{
    //按钮主题
    theme:{
      type:String,
      default:'default'
    },
    size:{
      type:String,
      default:'normal'
    },
    loading:{
      type:Boolean,
      default:false
    },
  },
  computed:{
    classes(){
      const loadingClass = this.loading ? ' z-button-loading' : ''
      return `z-button-${this.theme} z-button-${this.size}${loadingClass}`
    }
  }
}
</script>

<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

@import "../assets/scss/_var.scss";
.z-button{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  &.z-button-loading{
    pointer-events: none;
    .z-button-spin{
      width: 20px;
      height: 20px;
      margin-right: 5px;
      animation: spin infinite 1s linear;
      >svg{
        width: 100%;
        height: 100%;
      }
    }
  }
  >span{
    display: inline-block;
    vertical-align: middle;

  }
  margin: 0;
  transition: .1s;
  font-weight: 500;
  font-size: 14px;
  border-radius: 4px;
  &.z-button-default{
    background: #fff;
    border: 1px solid #dcdfe6;
    &:hover,&:focus{
      color: #222831;
      border-color: #222831;
      background-color: #eeeeee;
    }
  }

  &.z-button-primary{
    background: #00adb5;
    border: 1px solid #393e46;
    color: #eeeeee;
    &:hover,&:focus{
      color: #eeeeee;
      border-color: #222831;
      background-color: #40babf;
    }
  }

  &.z-button-success{
    background: #4ecca3;
    border: 1px solid #393e46;
    color: #eeeeee;
    &:hover,&:focus{
      color: #eeeeee;
      border-color: #222831;
      background-color: #6be3bc;
    }
  }
  &.z-button-danger{
    background: #d72323;
    border: 1px solid #d72323;
    color: #eeeeee;
    &:hover,&:focus{
      color: #eeeeee;
      border-color: #dd5656;
      background-color: #dd5656;
    }
  }

  &.z-button-info{
    background: #52616b;
    border: 1px solid #393e46;
    color: #eeeeee;
    &:hover,&:focus{
      color: #eeeeee;
      border-color: #222831;
      background-color: #6c777d;
    }
  }

  &.z-button-warning{
    background: #fce38a;
    border: 1px solid #393e46;
    color: #4a4444;
    &:hover,&:focus{
      color: #8e8282;
      border-color: #222831;
      background-color: #f7e4a4;
    }
  }

  &.z-button-text{
    background: #fff;
    border: 0;
    color: #4a4444;
    &:hover,&:focus{
      >span{
        color: #8e8282;
        border-color: #222831;
        background-color: #f7e4a4;
      }
    }
  }

  &.z-button-normal{
    padding: 12px 20px;
  }
  &.z-button-small{
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  &.z-button-mini{
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
  }
}
</style>
