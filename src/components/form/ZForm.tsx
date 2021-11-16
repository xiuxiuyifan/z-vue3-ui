/*
需要在form 里面调用form-item 的校验方法
以为，prop 是传给form-item 的
所以要缓存子组件，

为什么 使用了options api 实现
因为在 from 组件里面要通过slot 获取到子组件的方法，并调用。
*/
import { defineComponent } from "vue";
import { useEmitter } from "../hooks/emitter";

export default defineComponent({
  props: {
    model: {
      type : Object
    },
    rules: {
      type: Object
    },
    labelWidth: {
      type: String
    }
  },
  provide() {
    return {
      form: this
    }
  },
  data() {
    return {
      fields: []
    }
  }, 
  created() {
    const { on } = useEmitter()
    // 监听子组件触发的事件，缓存form-item 组件在内部。
    on('on-form-item-add', (field) => {
      if(field) {
        this.fields.push(field)
      }
    })
    // 监听内部组件触发的事件，并调用内部的验证方法
  },
  setup(props, {slots,expose}) {
    return {}
  },
  methods: {
    // 公开方法
    resetFields() {
      this.fields.forEach(field => {
        field.resetField()
      })
    },
    validate(callback) {
      return new Promise((resolve, reject)=>{
        let count = 0
        let valid = true
        // 开始调用子组件的验证方法
        this.fields.forEach(field => {
          // 传空值表示不管在是么事件的时候都触发，子组件内部的校验方法。
          field.validate('', (err) => {
            if(err) {
              valid = false
            }
            // 必须保证全部校验完毕， 并且在校验过程中有一个失败了。这个form的校验器就返回校验失败
            if(++count === this.fields.length) {
              resolve(valid)
              // 支持传递回调函数的形式。
              if(typeof callback === 'function') {
                callback(valid)
              }
            }
          })
        })
      })
    }
  },
  render() {
    const {
      $slots
    } = this
    return (
      <form>
        {$slots.default()}
      </form>
    )
  }
})
