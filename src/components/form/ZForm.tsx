/*
需要在form 里面调用form-item 的校验方法
以为，prop 是传给form-item 的
所以要缓存子组件，
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
    resetFields() {

    },
    validate() {
      
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
