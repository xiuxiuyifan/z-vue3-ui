<template>
  <div class="fold-code" @mouseenter="enter" @mouseleave="leave">
    <div class="demo-wrapper">
      <component :is="component"></component>
    </div>
    <div class="per-wrapper">
      <div class="per-content" :style="{height:height+'px'}">
        <div class="per-desc"></div>
        <pre ref="codePer" class="language-html" v-html="html"></pre>
      </div>
      <div class="demo-block-control" @click="toggle">
        <svg class="down" aria-hidden="true">
          <use xlink:href="#icon-iup"></use>
        </svg>
        <transition name="fade">
          <span class="show-world" v-show="show">显示代码</span>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue'
import 'prismjs/'
import 'prismjs/themes/prism.css'

const Prism = (window as any).Prism

export default {
  name: 'code-per',
  props: {
    component: {
      type: Object
    }
  },
  setup(props, context) {
    const show = ref(false)
    const enter = () => {
      console.log('进入');
      show.value = true
    }
    const leave = () => {
      console.log('移出');
      show.value = false
    }
    return {
      show,
      enter,
      leave
    }
  },
  data() {
    return {
      html: '',
      height: 0,
      computedHeight: 0,
    }
  },
  mounted() {
    //由于打包后不支持
    //换成传入组件的形式
    this.html = Prism.highlight(this.component.__sourceCode, Prism.languages.javascript, 'javascript')
    this.$nextTick(() => {
      const codePer = this.$refs.codePer
      let {height} = codePer.getBoundingClientRect()
      this.computedHeight = height
      console.log(this.computedHeight);
    })
  },
  methods: {
    toggle() {
      if (this.height === 0) {
        this.height = this.computedHeight
      } else {
        this.height = 0
      }
    }
  }
}
</script>

<style lang="less" scoped>
pre {
  margin: 0;
  background-color: #fafafa;
  font-size: 15px;
  padding: 18px 24px;
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

  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
    //.down{
    //  transform: translateX(-40px);
    //}
  }
}

.per-wrapper {
  .per-content {
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
    overflow: hidden;
    height: 0;
    transition: height .2s;
  }

  .demo-block-control {
    border-top: 1px solid #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;
    text-align: center;
    left: 0;

    &:hover {
      color: #409eff;
      background-color: #f9fafc;
    }

    .down {
      width: 16px;
      height: 44px;
      fill: currentcolor;
      transition: all .2s linear;
    }

    .show-world {
      position: absolute;
      font-size: 14px;
      line-height: 44px;
      display: inline-block;
      vertical-align: top;
      transition: all 0.2s;
      transform: translateX(-30px);
    }
  }

  .fade-enter {
    transform: translateX(0px);
  }

  .fade-enter-to {
    transform: translateX(-30px);
  }

  .fade-leave {
    transform: translateX(-30px);
  }

  .fade-leave-to {
    transform: translateX(0px);
  }
}
</style>
