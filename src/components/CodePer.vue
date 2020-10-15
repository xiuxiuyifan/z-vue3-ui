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
          <use :xlink:href="showCode===false?'#icon-iup':'#icon-idown-copy'"></use>
        </svg>
        <transition name="fade">
          <span class="show-world" v-show="show">{{ showCode === true ? '隐藏代码' : '显示代码' }}</span>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, computed} from 'vue'
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
      show.value = true
    }
    const leave = () => {
      show.value = false
    }

    return {
      show,
      enter,
      leave
    }
  },
  computed: {
    showCode: function () {
      if (this.height === 0) {
        return false
      } else {
        return true
      }
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

    .down {
      transform: translateX(-35px);
    }
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
      color: #aca8ff;
      background-color: #f9fafc;
    }

    .down {
      width: 16px;
      height: 44px;
      fill: currentcolor;
      transition: all .3s;
    }

    .show-world {
      position: absolute;
      font-size: 14px;
      line-height: 44px;
      transition: all 0.3s;
      transform: translateX(-30px);

      &.fade-enter {
        opacity: 0;
        transform: translateX(10px);
      }

      &.fade-enter-to {
        opacity: 1;
        transform: translateX(-30px);
      }

      &.fade-leave {
        opacity: 1;
        transform: translateX(-30px);
      }

      &.fade-leave-to {
        opacity: 0;
        transform: translateX(0px);
      }
    }
  }
}
</style>
