import { defineComponent, PropType, computed } from "vue";
import { useEmitter } from "../hooks/emitter";

import './input.scss'

export default defineComponent({
  props: {
    value: {
      type: String as PropType<string>
    }
  },
  emits: ['update:value'],
  setup(props, ctx) {
    const { dispatch } = useEmitter()
    // const currentValue = computed(() => {
    //   return props.value
    // })
    const handleInput = (e) => {
      let val = e.target?.value
      ctx.emit('update:value', val)
      // 当 触发 input 的input 事件之后，向父组件派发事件，触发父组件的校验方法。
      dispatch('on-form-change', val)
    }
    const handleBlur = (e) => {
      let val = e.target?.value
      dispatch('on-form-blur', val)
    }

    const handleClear = () => {
      ctx.emit('update:value', '')
    }
    return {
      // currentValue,
      handleInput,
      handleBlur,
      handleClear
    }
  },
  render() {
    const {
      handleInput,
      handleBlur,
      handleClear,
      // currentValue,
      value
    } = this
    return (
      <div className='z-input-wrapper'>
        <input
          type="text"
          value={value}
          onInput={handleInput}
          onBlur={handleBlur}
          className='z-input'
        />
        {value.length ? (<div className='clear-input-wrapper' onClick={handleClear}>
          <z-icon
            icon='guanbi'
            classics='clear-input'
          >
          </z-icon>
        </div>): null}
      </div>
    )
  }
})
